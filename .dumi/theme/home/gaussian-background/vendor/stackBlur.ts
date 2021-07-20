import { mulTable, shgTable } from './stackBlurTable';

export function stackBlurCanvasRGB(canvasIDOrElement, topX, topY, width, height, radius) {
  if (Number.isNaN(radius) || radius < 1) return;
  radius |= 0;

  const canvas = stackBlurGetElement(canvasIDOrElement);
  if (!canvas && !canvas?.getContext) return;
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(topX, topY, width, height);
  const pixels = imageData.data;

  let x;
  let y;
  let i;
  let p;
  let yp;
  let yi;
  let yw;
  let rSum;
  let gSum;
  let bSum;
  let rOutSum;
  let gOutSum;
  let bOutSum;
  let rInSum;
  let gInSum;
  let bInSum;
  let pr;
  let pg;
  let pb;
  let rbs;
  let stackEnd;

  const div = radius + radius + 1;
  const widthMinus1 = width - 1;
  const heightMinus1 = height - 1;
  const radiusPlus1 = radius + 1;
  const sumFactor = (radiusPlus1 * (radiusPlus1 + 1)) / 2;

  const stackStart = new BlurStack();
  let stack = stackStart;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) stackEnd = stack;
  }
  stack.next = stackStart;
  let stackIn = null;
  let stackOut = null;

  yw = yi = 0;

  const mulSum = mulTable[radius];
  const shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = rSum = gSum = bSum = 0;

    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);

    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;

      rInSum += pr;
      gInSum += pg;
      bInSum += pb;

      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi] = (rSum * mulSum) >> shgSum;
      pixels[yi + 1] = (gSum * mulSum) >> shgSum;
      pixels[yi + 2] = (bSum * mulSum) >> shgSum;

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;

      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;

      p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];

      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;

      stackIn = stackIn.next;

      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;

      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;

      stackOut = stackOut.next;

      yi += 4;
    }
    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = rInSum = gSum = bSum = rSum = 0;

    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);

    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = (yp + x) << 2;

      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;

      rInSum += pr;
      gInSum += pg;
      bInSum += pb;

      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = (rSum * mulSum) >> shgSum;
      pixels[p + 1] = (gSum * mulSum) >> shgSum;
      pixels[p + 2] = (bSum * mulSum) >> shgSum;

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;

      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;

      p = (x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width) << 2;

      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];

      stackIn = stackIn.next;

      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;

      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;

      stackOut = stackOut.next;

      yi += width;
    }
  }

  context.putImageData(imageData, topX, topY);
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

function stackBlurGetElement(elementOrID) {
  if (elementOrID.nodeType === 1) return elementOrID;

  return document.getElementById(elementOrID);
}
