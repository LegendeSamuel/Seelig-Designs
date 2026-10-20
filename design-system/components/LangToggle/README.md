# LangToggle

The DE / EN language switch that sits left of the wordmark in the header (`.lang-toggle`).

## What you provide
- One `<button class="lang-toggle">` holding `<span data-lang="de">DE</span><span class="lang-sep">/</span><span data-lang="en">EN</span>`.
- Class `active` on the current language's span. German is the default language of the site.
- A translated `aria-label` ("Sprache wechseln" / "Switch language").

## Values
- `lang-toggle` style (13.6px/600/1px tracking), padding `0.35rem 0.75rem`, border 1px `line-toggle`, radius `radius-pill`.
- Inactive language at 50% opacity; the active one full opacity in `amber`; the slash at 40%.
- Hover: border `amber`.
- Under 1250px and on mobile it shrinks to 11.2px with `0.25rem 0.5rem` padding.
