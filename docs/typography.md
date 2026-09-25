# Typography

The photograph leads. Type sits back: a sharp serif for titles, and a plain sans for everything a guest reads or fills in.

## Display: Instrument Serif

Instrument Serif is a single-weight old-style (Rodrigo Fuenzalida, Google Fonts). It is used for the wordmark, page titles, quotes, and the calendar month. The italic is the second line of a headline. There is no softness or wonk axis.

Loaded locally via `@fontsource/instrument-serif` at weight 400, roman and italic.

## Text and UI: Figtree

Figtree is the sans used by Clarke Design Studio. It carries navigation, forms, captions, and body copy.

Loaded locally via `@fontsource-variable/figtree`.

## What was rejected

Fraunces with softness and wonk looked bubbly. Newsreader still felt like a book face sitting on the room. Schibsted Grotesk and Outfit were the previous UI faces. Inter, Jost, Syne, and `system-ui` stay out. System fonts appear only as the CSS generic families `serif` and `sans-serif` behind the real faces.

## Text on photographs

Any type that sits on a photograph gets a 0.6px black stroke so it stays readable without a heavy scrim. That includes the hero headline, deck, and the header while it is still transparent over the room. Type on the cream pages does not get the stroke.

## Use

- Instrument Serif for the wordmark, page titles, quotes, and calendar month.
- Figtree for everything a guest scans or fills in.
- The hero title stays in the lower left, small enough that the room remains the picture.
