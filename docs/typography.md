# Typography

TrailSide’s type has to feel like a kept historic building and a working modern house at the same time: timber and brick, not a banquet-hall template.

## Display: Fraunces

Fraunces is a variable old-style serif (designed by Undercase Type, published by Google Fonts) with optical size, a softness axis, and a “wonk” axis. At display sizes the serifs are sharp and the contrast is high, which reads as engraved signage. A little softness and wonk keep the wordmark from feeling like a fashion magazine borrowed for a wedding. The italic is used for the emotional half of a headline — “on the D&L”, “waiting for photographs” — so the name can stay upright and sturdy.

Loaded locally via `@fontsource-variable/fraunces` (`full` and `full-italic`), so the page does not depend on a third-party font host.

## Text and UI: Schibsted Grotesk

Schibsted Grotesk is a contemporary grotesque with open apertures and a slightly industrial rhythm. It carries navigation, forms, captions, and body copy. Next to Fraunces it is the “modern amenities” voice: clear at small sizes, not decorative, and not a default UI face.

Loaded locally via `@fontsource-variable/schibsted-grotesk`.

## What was rejected

Inter, Jost, Syne, and `system-ui` are out. They are the generic defaults of product UI and do not signal a Lehighton mill building. System fonts appear only as the CSS generic families `serif` and `sans-serif` behind the real faces, so a failed font file still leaves readable type.

## Use

- Fraunces for the wordmark, page titles, quotes, and calendar month.
- Schibsted Grotesk for everything a guest scans or fills in.
- Uppercase tracking is reserved for eyebrows, captions, and the photograph label. It is not used for long text.
