# RoundButton

Circular icon-only buttons: the testimonial slider arrows (`.slider-btn`) and the lightbox controls (`.lb-btn`).

## When to use
- Stepping through a sequence (testimonials, lightbox images) and closing an overlay.
- Never for a primary action — that is `Button`.

## What you provide
- A `<button>` with an `aria-label` (German by default: "Vorheriges Testimonial", "Schließen").
- A single text glyph as content: `&larr;` `&rarr;` for the slider, `&times;` `&lsaquo;` `&rsaquo;` for the lightbox. No icon font.
- For the lightbox add `lb-close`, `lb-prev` or `lb-next` for size and position.

## Values
- `.slider-btn`: 3rem circle, transparent, 1px `line-control` border, glyph 1.3rem.
- `.lb-btn`: `fill-hover` background, 1px `line-control`; close 3rem, prev/next 3.25rem.
- Hover (both): fill `accent`, border `accent`, glyph `on-accent`. 0.3s (slider) / 0.25s (lightbox).

## Accessibility
The resting border (`line-control`, ~1.9:1) is below the 3:1 control floor — kept from the source. The white glyph (17.8:1) carries the affordance; don't rely on the ring alone, and keep the `aria-label`.
