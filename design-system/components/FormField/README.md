# FormField

A labelled input or textarea on a dark recessed fill, grouped in the translucent contact panel (`.form-group` inside `.form-wrapper`).

## What you provide
- `.form-wrapper` › `<h2>` + `<form class="contact-form">` › one `.form-group` per field › `<label for>` + `<input>`/`<textarea>`.
- Required fields: `<span class="required">*</span>` after the label text, plus the `required` attribute.
- Placeholders in the informal voice: "Dein Name", "Deine E-Mail-Adresse", "Worum geht es?", "Erzähl mir von deinem Projekt ...".
- End with a full-width `Button` ("Nachricht senden").

## Values
- Panel: `surface-panel`, 1px `line`, `radius-xl`, padding `space-6` (`space-4` under 900px), `shadow-panel`. Title `panel-title` (32px Light, amber).
- Label: `label` style, `text-label`, 0.5rem left indent; the asterisk in `amber`.
- Field: `field` fill, 1px `line`, `radius-md`, padding `space-2`, `input` style.
- Focus: border `amber`, fill `field-focus`, `shadow-focus` glow; no outline. 0.3s ease.

## Accessibility
The resting field border (`line`) is faint (1.3:1); every field needs its visible label.
