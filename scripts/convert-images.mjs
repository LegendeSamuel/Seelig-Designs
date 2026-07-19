#!/usr/bin/env node
/* =========================================================================
   Bild-Optimierung für Seelig Designs
   -------------------------------------------------------------------------
   Erzeugt neben jedem JPG/PNG in img/ eine komprimierte .webp-Version
   (optional zusätzlich .avif). Die Originale bleiben als Fallback erhalten.

   Voraussetzung (einmalig, lokal auf deinem Rechner):
       npm install

   Ausführen:
       npm run images            # nur WebP
       npm run images -- --avif  # WebP + AVIF
       npm run images -- --force # auch bereits konvertierte neu erzeugen

   Danach die Bilder per <picture> einbinden (siehe scripts/README.md),
   damit moderne Browser WebP/AVIF laden und ältere das JPG.
   ========================================================================= */

import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('\n  ✗ Das Paket "sharp" fehlt. Bitte zuerst ausführen:  npm install\n');
  process.exit(1);
}

const ROOT = path.resolve(process.cwd(), 'img');
const RASTER = new Set(['.jpg', '.jpeg', '.png']);
const args = process.argv.slice(2);
const DO_AVIF = args.includes('--avif');
const FORCE = args.includes('--force');
const MAX_WIDTH = 2000; // sehr große Originale herunterskalieren

let count = 0, skipped = 0, bytesBefore = 0, bytesAfter = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { await walk(full); continue; }
    const ext = path.extname(entry.name).toLowerCase();
    if (!RASTER.has(ext)) continue;
    await convert(full);
  }
}

async function convert(file) {
  const base = file.slice(0, -path.extname(file).length);
  const targets = [{ ext: '.webp', opts: { quality: 80 } }];
  if (DO_AVIF) targets.push({ ext: '.avif', opts: { quality: 55 } });

  const orig = await stat(file);

  for (const { ext, opts } of targets) {
    const out = base + ext;
    if (!FORCE && existsSync(out) && (await stat(out)).mtimeMs >= orig.mtimeMs) {
      skipped++;
      continue;
    }
    try {
      const pipeline = sharp(file).resize({ width: MAX_WIDTH, withoutEnlargement: true });
      const info = ext === '.avif' ? await pipeline.avif(opts).toFile(out)
                                   : await pipeline.webp(opts).toFile(out);
      bytesBefore += orig.size;
      bytesAfter += info.size;
      count++;
      const pct = Math.round((1 - info.size / orig.size) * 100);
      console.log(`  ✓ ${path.relative(process.cwd(), out)}  (−${pct}%)`);
    } catch (e) {
      console.error(`  ✗ ${path.relative(process.cwd(), file)}: ${e.message}`);
    }
  }
}

console.log(`\nKonvertiere Bilder in ${path.relative(process.cwd(), ROOT)}/ ...\n`);
await walk(ROOT);
const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`\nFertig: ${count} Datei(en) erzeugt, ${skipped} übersprungen.`);
if (count) console.log(`Größe der Originale: ${mb(bytesBefore)} MB → optimiert: ${mb(bytesAfter)} MB\n`);
