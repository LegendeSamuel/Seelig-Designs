# VideoFacade

A privacy-first click-to-load video frame: a dimmed poster, a round amber play button and a consent note; YouTube loads only after the click.

## What you provide
- `.video-wrapper` (16:9) › `<button class="yt-facade" data-video-id="…" aria-label="Video laden und abspielen" style="background-image:url(poster)">` › `<span class="yt-play">` + `<span class="yt-consent">`.
- The consent sentence, verbatim in spirit: that YouTube loads on click, that data goes to Google, and where the privacy policy is.
- On click, replace the button with the YouTube iframe (see js/app.js).

## Values
- Frame: `radius-lg`, 1px `line`, `shadow-frame`, black behind.
- Scrim: `scrim-video`, lightening to 0.3 on hover.
- Play: 5rem `accent` disc with an `on-accent` triangle, `shadow-play`; scales 1.1 on hover. 4rem under `bp-sm`.
- Consent: `consent` style in `text-soft`, max 480px.

## Rule
Never embed third-party media directly. Every external embed gets a facade and a consent line.
