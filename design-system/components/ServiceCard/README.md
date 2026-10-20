# ServiceCard

A quiet, hairline-bordered card naming one kind of work with one sentence about it.

## What you provide
- `<div class="services-grid">` of `<div class="service-card"><h3>…</h3><p>…</p></div>`.
- Title: the genre ("Hochzeiten & Feiern", "Portraits", "Events", "Natur & Landschaft").
- Body: one sentence, no full stop-heavy lists. It speaks to the reader ("eurer besonderen Tage").

## Values
- Grid: `repeat(auto-fit, minmax(230px, 1fr))`, gap `space-3`.
- Card: `fill-subtle`, 1px `line-subtle`, `radius-lg`, padding `space-4`.
- Title `card-title` in `amber`; copy `body-sm` in `text-muted`.
- Hover: lifts 5px, border turns `amber`. 0.3s ease.

## Don't
No icons, images or buttons inside; no coloured left-border accent.
