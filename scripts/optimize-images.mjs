/**
 * Wandelt die Quellbilder in WebP um und skaliert sie auf die Größe, die
 * tatsächlich gebraucht wird.
 *
 * Warum überhaupt, wo next/image doch schon optimiert: next/image rechnet zur
 * Laufzeit aus dem Quellbild herunter. Ein 1717-KB-PNG als Quelle macht die
 * Auslieferung nicht schwerer, aber den Build langsamer, die erste
 * Optimierung teuer und das Repo unnötig fett.
 *
 * Aufruf: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const DIR = "public/img";

/** Zielbreite = größte gerenderte CSS-Breite x2 für Retina, plus etwas Reserve. */
const KEEP = {
  "design-ohne-titel-6.png": { out: "portrait-hero.webp", width: 1200 },
  "design-ohne-titel-8.png": { out: "portrait-buero.webp", width: 1400 },
  "design-ohne-titel-7.png": { out: "portrait-2.webp", width: 1200 },
  "design-ohne-titel-9.png": { out: "portrait-3.webp", width: 1400 },
  "chatgpt-image-5.-ma-rz-2026-01_07_19.png": { out: "logo-cic-global.webp", width: 800 },
  "AdobeStock_312927435.jpeg": { out: "leistungen-ticker-bg.webp", width: 2000 },
};

const kb = (n) => Math.round(n / 1024);

let before = 0;
for (const f of fs.readdirSync(DIR)) before += fs.statSync(path.join(DIR, f)).size;

for (const [src, { out, width }] of Object.entries(KEEP)) {
  const from = path.join(DIR, src);
  if (!fs.existsSync(from)) continue;
  const to = path.join(DIR, out);
  await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(to);
  console.log(
    `  ${src.padEnd(42)} ${String(kb(fs.statSync(from).size)).padStart(5)} KB  →  ${out.padEnd(22)} ${String(kb(fs.statSync(to).size)).padStart(4)} KB`
  );
}

// Quell-PNGs und ungenutzte Deko-Grafiken entfernen
for (const f of fs.readdirSync(DIR)) {
  if (f.endsWith(".webp")) continue;
  fs.unlinkSync(path.join(DIR, f));
}

let after = 0;
for (const f of fs.readdirSync(DIR)) after += fs.statSync(path.join(DIR, f)).size;
console.log(`\n  Gesamt: ${kb(before)} KB → ${kb(after)} KB (−${Math.round((1 - after / before) * 100)} %)`);
