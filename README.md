# Equipment Rotation

`equipment-rotation` is a browser-based image orientation helper. It loads a local photo in the browser, reads its EXIF orientation metadata, runs an ONNX model in the client with `onnxruntime-web`, and shows a corrected preview based on the predicted rotation.

Live demo: https://chrislaughlin.github.io/equipment-rotation/

## What it does

- Accepts a local image upload.
- Reads the image's EXIF orientation tag with `exifr`.
- Converts the image into the tensor shape expected by the orientation model.
- Runs the model fully in the browser with the WASM execution provider.
- Applies the predicted correction to a canvas preview so you can inspect the result immediately.

## How the AI model works

The orientation model is a small image-classification network exported to ONNX. Instead of trying to detect every object in the image, it focuses on *global orientation cues* such as horizon lines, floor/ceiling layout, lighting direction, and common object posture. It then chooses the most likely upright orientation from four possible classes.

### Model inputs

Before inference, the app converts the uploaded image into exactly what the model expects:

1. **Center crop to square** to keep the most important content.
2. **Resize** to the model's fixed input size.
3. **Convert pixels to float values** in RGB order.
4. **Normalize channels** using ImageNet-style mean/std constants.
5. **Pack into a tensor** with shape `[1, 3, H, W]` (batch, channels, height, width).

This preprocessing is critical: if these steps differ from the training pipeline, predictions become unstable.

### Model output

The model returns scores for four rotation classes:

- `0`: already upright (`0°`)
- `1`: rotate `90°` clockwise
- `2`: rotate `180°`
- `3`: rotate `90°` counter-clockwise

The app picks the class with the highest score (argmax), converts it to a rotation angle, and applies that correction to the preview canvas.

## How the app detects when an image needs rotation

The app uses a **two-signal strategy**:

1. **EXIF metadata signal** (camera-provided):
   - Many photos include an EXIF `Orientation` tag.
   - If present, this tells the app how the image should be displayed.

2. **AI visual signal** (content-based):
   - The ONNX model inspects visual content and predicts which rotation makes the image upright.
   - This works even when EXIF data is missing, stripped, or incorrect.

### Why use both?

- EXIF is fast and often correct, but not always available.
- AI is robust to missing metadata because it looks at the actual pixels.
- Combining metadata and model prediction improves reliability across photos from phones, screenshots, exports, and edited files.

## End-to-end flow

1. The user selects an image file in the browser.
2. The app loads the image and reads its EXIF `Orientation` tag.
3. The app preprocesses pixels and runs ONNX inference in-browser (`onnxruntime-web` + WASM).
4. The predicted class is translated into a rotation correction.
5. The corrected result is drawn to canvas for immediate visual verification.

## Tech stack

- Vite
- Vanilla JavaScript
- `onnxruntime-web`
- `exifr`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The GitHub Pages deployment is served from the `gh-pages` branch and uses the repo subpath `/equipment-rotation/`.
