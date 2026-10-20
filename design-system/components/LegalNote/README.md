# LegalNote

An amber-washed callout for notices on the Imprint and Privacy pages, with inline `.todo` markers for text still to be filled in.

## What you provide
- `<p class="legal-note">` with the notice text.
- Placeholders as `<span class="todo">[…]</span>` — italic amber, 0.95em.

## Values
- Fill `accent-wash`, 1px `accent-border-soft`, 4px `amber` left edge, `radius-sm`, padding `1rem 1.25rem`.
- Copy: 16px/1.6 in `text-note` (11.7:1).

## Rule
Only for legal and editorial notices. This is the single place the site uses a left-edge accent — don't reuse it for content cards.
