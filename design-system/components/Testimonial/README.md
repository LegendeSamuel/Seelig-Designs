# Testimonial

One client quote with their names and a round photo, shown one at a time in a cross-fading slider.

## What you provide
- `.testimonial-slide` › `.testimonial-content` (`<p class="quote">` + `<cite class="author">- Names</cite>`) + `.testimonial-image` (`Portrait` at `profil--sm`).
- Short, real quotes — one sentence. Author line starts with "- " and names both partners joined by "&".
- `.slider-navigation` with two `RoundButton`s below the slider.

## Values & motion
- Quote: `quote` style (20.8px Light italic, 1.6 leading), white.
- Author: `author` style (17.6px SemiBold) in `amber`.
- Slides stack absolutely and cross-fade: `opacity` + `visibility` over 0.6s ease; `.active` is shown.
- Under `bp-md` the slide stacks: quote first, photo below, centred.
