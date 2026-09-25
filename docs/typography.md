# Typography

TrailSide’s type should feel like a kept historic building: timber, brick, and a set table. The headlines are a book serif. The interface is a plain geometric sans.

## Display: Newsreader

Newsreader is a variable old-style serif (Production Type) with an optical-size axis. At display sizes the contrast is high and the italic is quiet, closer to an invitation than a novelty wordmark. It carries the wordmark, page titles, quotes, and the calendar month.

Loaded locally via `@fontsource-variable/newsreader` (`opsz` and `opsz-italic`). Optical size stays inside Newsreader’s 6–72 range. The softness and wonk axes from the previous display face are not used.

## Text and UI: Outfit

Outfit is a geometric sans with an even rhythm. It is the same UI face used on Milk Street Distillery. It carries navigation, forms, captions, and body copy, and it stays clear at small sizes.

Loaded locally via `@fontsource-variable/outfit`.

## What was rejected

Fraunces with softness and wonk made the headlines look bubbly. Schibsted Grotesk fought that display face instead of settling next to the photographs. Inter, Jost, Syne, and `system-ui` stay out. System fonts appear only as the CSS generic families `serif` and `sans-serif` behind the real faces, so a failed font file still leaves readable type.

## Use

- Newsreader for the wordmark, page titles, quotes, and calendar month.
- Outfit for everything a guest scans or fills in.
- Uppercase tracking is reserved for eyebrows, captions, and the photograph label. It is not used for long text.
