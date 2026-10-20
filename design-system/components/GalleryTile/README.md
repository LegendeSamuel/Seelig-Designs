# GalleryTile

A rounded photo tile in a CSS-columns masonry grid that, on hover, darkens, zooms and reveals its category over an amber gradient.

## Where
- Homepage "Highlights" (`.masonry-grid` / `.masonry-item`, radius `radius-lg`, gap `gap-masonry`).
- Gallery page (`.gallery-grid` / `.gallery-item`, radius `radius-gallery`, gap `gap-gallery`; opens the `Lightbox` on click; hover shows only the amber frame, no label).

## What you provide
- `<div class="masonry-item">` › `<img>` (lazy, with German `alt`) + `<div class="masonry-item-overlay"><h3>Category</h3></div>`.
- Images at their natural aspect ratio — never crop to a uniform grid; the masonry rhythm is the point.

## Values & motion
- Rest: `shadow-tile`, `surface-card` behind the image.
- Hover (0.4s ease): image `scale(1.05)` + `brightness(0.5)`; overlay fades in — `accent-overlay` gradient from the bottom and a 2px `accent-overlay` frame; the label rises 20px into place.
- Columns: 4 → 2 at `bp-lg` (homepage); 4 → 3 (1100px) → 2 (`bp-md`) → 1 (460px) on the gallery page.

## Contrast
White labels over the amber gradient are ~2:1 on the gradient alone — the source's pair. They stay at 24px and sit over the darkened (50%) photo; keep them short.
