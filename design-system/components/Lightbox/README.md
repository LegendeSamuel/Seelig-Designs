# Lightbox

The full-screen image viewer the gallery opens: near-black scrim, the photo contained, round controls and a counter pill.

## What you provide
- `.lightbox` (fixed, `z-lightbox`, `hidden` when closed) › `.lb-image` + `RoundButton`s (`lb-close`, `lb-prev`, `lb-next`) + `.lb-counter` ("3 / 24").
- Keyboard: Esc closes, ← → step; focus returns to the tile that opened it (js/gallery.js).

## Values
- Scrim `scrim-lightbox`; padding `space-6` (1rem on phones).
- Image: max 90vw × 85vh, `object-fit: contain`, `radius-xs`, `shadow-lightbox`.
- Counter: 16px, 1px tracking, #dddddd on `scrim-counter`, `radius-pill`.
