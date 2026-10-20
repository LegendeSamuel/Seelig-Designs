# ContactItem

A full-width link row for one contact channel: amber line icon, a tiny uppercase label and the value.

## What you provide
- `<a class="contact-item" href="mailto:…|tel:…|https://wa.me/…">` › `.icon-box` (an inline SVG using `currentColor`) + `.text-box` (`<span class="label">` + `<span class="value">`).
- The icons are the site's own line icons (see Icons) inlined so they pick up `amber`.
- Labels are verbs in the informal "du": "Schreib mir", "Ruf mich an", "WhatsApp".

## Values
- Row: padding `space-2`, gap `space-3`, `radius-md`, `fill-subtle`, 1px `line-faint`.
- Icon box 50px, icon 30px in `amber`.
- Label: `eyebrow` style (12.8px uppercase, 1px tracking) in `text-caption`; value: `contact-value` (17.6px/500).
- Hover: slides 10px right, fill `fill-hover`, border `amber`. 0.3s.
