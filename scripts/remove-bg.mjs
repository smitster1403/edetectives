import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/ED logo black.png");
const outputLogo = resolve("public/ED logo transparent.png");
const outputIcon = resolve("app/icon.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  // Distance from black — scale alpha so edges stay smooth
  const dist = Math.sqrt(r * r + g * g + b * b);
  const threshold = 80;
  if (dist < threshold) {
    data[i + 3] = Math.round((dist / threshold) * data[i + 3] * 0.3);
  }
}

const transparent = await sharp(data, { raw: { width, height, channels } })
  .png()
  .toBuffer();

await sharp(transparent).toFile(outputLogo);
await sharp(transparent).toFile(outputIcon);

console.log("Done — transparent logo written to public/ and app/");
