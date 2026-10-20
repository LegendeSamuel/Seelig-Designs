# FilterChip

Pill toggles that filter the gallery by category (`.filter-btn` inside `.gallery-filters`).

## When to use
- Single-select category filtering above an image grid. Exactly one chip is `active`; "Alle" (All) comes first.

## What you provide
- A `<div class="gallery-filters" role="group" aria-label="Kategorie-Filter">` wrapping `<button class="filter-btn">` elements.
- `aria-pressed="true"` and class `active` on the selected chip; `false` on the rest.
- Category names as the site writes them: "Portraits", "Street", "Landschaft - Natur", "Architektur", "Events", "Hochzeit".

## Values
- `chip` type style (15.2px/500), padding `0.55rem 1.3rem`, radius `radius-pill`, gap `space-1-5`.
- Rest: `fill-chip` fill, `line-strong` border, `text-soft` label.
- Hover: border `amber`, label `text`.
- Active: fill `accent`, label `on-accent` at 600.
