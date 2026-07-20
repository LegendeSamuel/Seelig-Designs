#!/usr/bin/env node
/* =========================================================================
   Galerie aus Ordnern bauen
   -------------------------------------------------------------------------
   Liest die Unterordner von  img/gallery/<Kategorie>/  und schreibt daraus
   die Filter-Buttons und das Bildraster in gallery.html.

   So kuratierst du die Galerie:
     • Bild anzeigen        → Datei in den passenden Kategorie-Ordner legen
     • Bild ausblenden      → Datei aus dem Ordner heraus (oder löschen)
     • Kategorie hinzufügen → neuen Ordner unter img/gallery/ anlegen
     • Kategorie entfernen  → Ordner leeren oder löschen
     • Reihenfolge/Namen    → in der CONFIG unten anpassen

   Danach ausführen:
     npm run gallery          # baut gallery.html neu
     npm run images           # (optional) WebP für neue Bilder erzeugen

   Der englische Filtername kommt aus CONFIG; unbekannte neue Ordner
   erscheinen automatisch am Ende (deutscher = englischer Name).
   ========================================================================= */

import fs from 'node:fs';
import path from 'node:path';

const GALLERY_DIR = path.resolve('img/gallery');
const HTML_FILE = 'gallery.html';

// Reihenfolge + englische Labels. Ordnername = deutsches Label.
const CONFIG = [
  { dir: 'Portraits',          en: 'Portraits' },
  { dir: 'Street',             en: 'Street' },
  { dir: 'Landschaft - Natur', en: 'Landscape & Nature' },
  { dir: 'Architektur',        en: 'Architecture' },
  { dir: 'Events',             en: 'Events' },
  { dir: 'Hochzeit',           en: 'Weddings' },
  { dir: 'Stylized',           en: 'Stylized' },
  { dir: 'Technik',            en: 'Technology' }
];

const RASTER = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const encPath = (p) => p.split('/').map(encodeURIComponent).join('/');
const slug = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

if (!fs.existsSync(GALLERY_DIR)) {
  console.error(`\n  ✗ Ordner ${GALLERY_DIR} fehlt. Lege img/gallery/<Kategorie>/ an.\n`);
  process.exit(1);
}

// Kategorien: erst CONFIG-Reihenfolge, dann evtl. weitere Ordner
const present = fs.readdirSync(GALLERY_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory()).map((d) => d.name);
const cats = [];
for (const c of CONFIG) if (present.includes(c.dir)) cats.push({ ...c, key: slug(c.dir) });
for (const d of present) if (!CONFIG.find((c) => c.dir === d)) cats.push({ dir: d, en: d, key: slug(d) });

const filters = [
  `          <button class="filter-btn active" data-filter="all" data-de="Alle" data-en="All" aria-pressed="true">Alle</button>`,
];
const grid = [];
let total = 0, usedCats = 0;

for (const c of cats) {
  const dir = path.join(GALLERY_DIR, c.dir);
  const files = fs.readdirSync(dir).filter((f) => RASTER.includes(path.extname(f))).sort();
  if (!files.length) continue;
  usedCats++;
  filters.push(
    `          <button class="filter-btn" data-filter="${c.key}" data-de="${esc(c.dir)}" data-en="${esc(c.en)}" aria-pressed="false">${esc(c.dir)}</button>`
  );
  const alt = esc(`${c.dir} – Fotografie von Samuel Seelig`);
  for (const f of files) {
    const srcEnc = `img/gallery/${encPath(c.dir)}/${encPath(f)}`;
    const webpDisk = path.join(dir, f.replace(/\.[^.]+$/, '.webp'));
    const img = `<img src="${srcEnc}" alt="${alt}" loading="lazy" decoding="async">`;
    if (fs.existsSync(webpDisk)) {
      const wEnc = srcEnc.replace(/\.[^.]+$/, '.webp');
      grid.push(
        `        <figure class="gallery-item" data-cat="${c.key}">\n` +
        `          <picture>\n            <source srcset="${wEnc}" type="image/webp">\n            ${img}\n          </picture>\n` +
        `        </figure>`
      );
    } else {
      grid.push(`        <figure class="gallery-item" data-cat="${c.key}">\n          ${img}\n        </figure>`);
    }
    total++;
  }
}

let html = fs.readFileSync(HTML_FILE, 'utf8');
const filtersBlock =
  `<div class="gallery-filters" role="group" aria-label="Kategorie-Filter">\n${filters.join('\n')}\n      </div>`;
const gridBlock =
  `<div class="gallery-grid" id="gallery-grid">\n${grid.join('\n')}\n      </div>`;

const fBefore = html;
html = html.replace(/<div class="gallery-filters"[^>]*>[\s\S]*?<\/div>/, filtersBlock);
html = html.replace(/<div class="gallery-grid" id="gallery-grid">[\s\S]*?<\/div>/, gridBlock);
if (html === fBefore) {
  console.error('  ✗ Konnte Filter/Grid-Bereich in gallery.html nicht finden.');
  process.exit(1);
}
fs.writeFileSync(HTML_FILE, html);
console.log(`\n  ✓ gallery.html neu gebaut: ${total} Bilder in ${usedCats} Kategorien.`);
console.log('    Kategorien: ' + cats.filter((c) => fs.readdirSync(path.join(GALLERY_DIR, c.dir))
  .some((f) => RASTER.includes(path.extname(f)))).map((c) => c.dir).join(', ') + '\n');
