import * as ort from "onnxruntime-web";
import * as exifr from "exifr";

const MODEL_URL = `${import.meta.env.BASE_URL}models/orientation_model.onnx`;

// Fallback for models that don't expose concrete spatial dims in metadata.
const DEFAULT_INPUT_SIZE = 384;
const MEAN = [0.485, 0.456, 0.406];
const STD = [0.229, 0.224, 0.225];

const statusEl = document.getElementById("status");
const fileEl = document.getElementById("file");
const previewEl = document.getElementById("preview");

let sessionPromise;

async function getSession() {
  if (!sessionPromise) {
    sessionPromise = ort.InferenceSession.create(MODEL_URL, {
      executionProviders: ["wasm"],
      graphOptimizationLevel: "all",
    });
  }
  return sessionPromise;
}

function softmax(logits) {
  const max = Math.max(...logits);
  const exps = logits.map((x) => Math.exp(x - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((x) => x / sum);
}

function rotationFromClassIndex(classIndex) {
  // Based on the repo/model-card class meaning:
  // 0 = already correct
  // 1 = needs 90° clockwise
  // 2 = needs 180°
  // 3 = needs 90° counter-clockwise
  switch (classIndex) {
    case 0:
      return 0;
    case 1:
      return 90;
    case 2:
      return 180;
    case 3:
      return -90;
    default:
      return 0;
  }
}

function humanLabel(classIndex) {
  return ["upright", "rotate 90° clockwise", "rotate 180°", "rotate 90° counter-clockwise"][classIndex] ?? "unknown";
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load the selected image."));
    img.src = url;
  });
}

function centerCropSquare(width, height) {
  const size = Math.min(width, height);
  const sx = Math.floor((width - size) / 2);
  const sy = Math.floor((height - size) / 2);
  return { sx, sy, size };
}

function getImageInputSize(session) {
  const inputName = session.inputNames[0];
  const inputMetadata = session.inputMetadata.find((metadata) => metadata.name === inputName);

  if (!inputMetadata?.isTensor) return DEFAULT_INPUT_SIZE;

  const [, channels, height, width] = inputMetadata.shape;
  if (channels !== 3) {
    throw new Error(`Expected an RGB image model, but got input shape ${inputMetadata.shape.join("x")}.`);
  }

  if (typeof height === "number" && typeof width === "number") {
    if (height !== width) {
      throw new Error(`Expected a square image input, but got input shape ${inputMetadata.shape.join("x")}.`);
    }
    return height;
  }

  return DEFAULT_INPUT_SIZE;
}

function imageToTensor(img, inputSize) {
  const canvas = document.createElement("canvas");
  canvas.width = inputSize;
  canvas.height = inputSize;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  const { sx, sy, size } = centerCropSquare(img.width, img.height);
  ctx.drawImage(img, sx, sy, size, size, 0, 0, inputSize, inputSize);

  const { data } = ctx.getImageData(0, 0, inputSize, inputSize);

  // NCHW float32
  const floatData = new Float32Array(1 * 3 * inputSize * inputSize);
  const area = inputSize * inputSize;

  for (let i = 0; i < area; i++) {
    const r = data[i * 4] / 255;
    const g = data[i * 4 + 1] / 255;
    const b = data[i * 4 + 2] / 255;

    floatData[i] = (r - MEAN[0]) / STD[0]; // R
    floatData[area + i] = (g - MEAN[1]) / STD[1]; // G
    floatData[area * 2 + i] = (b - MEAN[2]) / STD[2]; // B
  }

  return new ort.Tensor("float32", floatData, [1, 3, inputSize, inputSize]);
}

async function predictRotation(img) {
  const session = await getSession();
  const inputSize = getImageInputSize(session);
  const inputTensor = imageToTensor(img, inputSize);

  // Most exported image models have a single input.
  const inputName = session.inputNames[0];
  const outputName = session.outputNames[0];

  const outputs = await session.run({ [inputName]: inputTensor });
  const logits = Array.from(outputs[outputName].data);
  const probs = softmax(logits);

  let bestIdx = 0;
  for (let i = 1; i < probs.length; i++) {
    if (probs[i] > probs[bestIdx]) bestIdx = i;
  }

  return {
    classIndex: bestIdx,
    label: humanLabel(bestIdx),
    confidence: probs[bestIdx],
    correctionDegrees: rotationFromClassIndex(bestIdx),
    probabilities: probs,
  };
}

function drawRotated(img, degrees) {
  if (degrees === 0) return img.src;

  const radians = (degrees * Math.PI) / 180;
  const swapSides = Math.abs(degrees) === 90;

  const canvas = document.createElement("canvas");
  canvas.width = swapSides ? img.height : img.width;
  canvas.height = swapSides ? img.width : img.height;

  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(radians);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);

  return canvas.toDataURL("image/jpeg", 0.92);
}

async function getOrientation(file) {
  const exif = await exifr.parse(file, ["Orientation"]);
  return exif?.Orientation || 1;
}

fileEl.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  statusEl.textContent = "Loading image…";

  try {
    const img = await loadImageFromFile(file);
    const orientation = await getOrientation(file);
    previewEl.src = img.src;

    statusEl.textContent = "Running model…";
    const result = await predictRotation(img);

    const correctedSrc = drawRotated(img, result.correctionDegrees);
    previewEl.src = correctedSrc;

    statusEl.textContent =
      `Prediction: ${result.label} | confidence: ${(result.confidence * 100).toFixed(1)}% | ` +
      `applied correction: ${result.correctionDegrees}° | EXIF orientation: ${orientation}`;
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    statusEl.textContent = `Failed to run prediction: ${message}`;
  }
});
