# Equipment Rotation

`equipment-rotation` is a browser-based image orientation helper. It loads a local photo in the browser, reads its EXIF orientation metadata, runs an ONNX model in the client with `onnxruntime-web`, and shows a corrected preview based on the predicted rotation.

Live demo: https://chrislaughlin.github.io/equipment-rotation/

## What it does

- Accepts a local image upload.
- Reads the image's EXIF orientation tag with `exifr`.
- Converts the image into the tensor shape expected by the orientation model.
- Runs the model fully in the browser with the WASM execution provider.
- Applies the predicted correction to a canvas preview so you can inspect the result immediately.

## How it works

1. The user selects an image file in the browser.
2. The app loads the image and reads its `Orientation` EXIF tag.
3. The image is center-cropped to a square and resized to the model's input dimensions.
4. Pixel values are normalized with ImageNet-style mean and standard deviation constants.
5. The ONNX model predicts one of four classes:
   - `0`: already upright
   - `1`: rotate 90 degrees clockwise
   - `2`: rotate 180 degrees
   - `3`: rotate 90 degrees counter-clockwise
6. The app converts that class into a rotation angle and redraws the preview with the correction applied.

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
