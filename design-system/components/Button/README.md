# Button

The pill-shaped, amber-outlined call to action (`.cta-button`) — the site's only button style.

## When to use
- The one primary action at the end of a section: "Kontakt aufnehmen", "Galerie", "Lass uns reden", "Nachricht senden", "Verstanden!".
- One per section. It is always paired with a short lead-in sentence above it (`.cta-after-testimonials p`).

## What you provide
- An `<a>` (navigation) or `<button>` (form submit, dismiss) with class `cta-button`.
- A short label, 1–3 words. It is rendered UPPERCASE with 1px tracking by CSS — write it in normal case in the markup.
- `cta-button--block` for full-width use (cookie banner, form submit).

## Anatomy & values
- Padding `0.8rem 2rem 1rem` (the extra bottom pixel optically centres Sofia Pro caps), border `2px solid amber`, radius `radius-pill`, text `button` style (16px/600/uppercase/1px).
- Rest: transparent fill, `text` label.
- Hover: fills `accent`, label turns `on-accent`, lifts `translateY(-3px)` with `shadow-lift`. Transition 0.3s ease.
- Focus: 3px `amber` outline, 2px offset.

## Do / don't
- Do keep the outline style at rest — the amber fill is the reward for hover.
- Don't put white text on a filled amber button (2.1:1). Filled = `on-accent` label.
- Don't introduce secondary/ghost/destructive variants; the site has none.
