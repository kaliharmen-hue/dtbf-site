# Site Layout Rules

This is the shared reference for page layout decisions. Journal article pages are a separate template and are intentionally not forced into the standard marketing-page layout.

## Heroes

- Keep each page's hero artwork, crop, aspect ratio, and image positioning as designed. Do not resize or recrop hero images as part of a general gutter change.
- Align hero headings and supporting copy to the regular text rail when the designed image composition leaves room. If the subject occupies that rail, preserve the heading's established negative-space placement rather than laying text over the subject; this is a deliberate hero exception.
- Handle mobile hero composition per page. Keep text readable and artwork visible; do not assume one universal mobile crop.

## Gutters And Margins

- Regular page content uses a centered content rail capped at 1480px (`--site-content-max`). Do not stretch regular copy or card grids beyond it.
- The page-edge gutter (`--page-gutter`) is the minimum breathing room from the viewport edge. On wide screens, the content rail creates a larger centered outer gutter as needed (`--site-content-outer-gutter`).
- Where copy should sit inside that content rail, use the shared text inset `--site-content-inset: clamp(24px, 4vw, 64px)`. This is an inset from the rail edge, not a second page gutter.
- Align regular section headings and their grids/cards to the same text rail. A grid may have internal card padding; that does not widen its outer rail.
- Full-width colour/background bands can extend beyond the content rail. Keep their inner content aligned to the rail or text inset described above.
- The site header has its own wider 1680px maximum (`--site-header-content-max`). Hero artwork can also use page-specific alignment. Hero headings and copy still align with the regular text rail; do not resize or recrop the artwork to achieve that.

## Grids And Cards

- Grid sections use the same outer alignment as regular content. Their headings align with the grid's left edge, not an unrelated page edge.
- Choose the number of columns for the content and available width. Keep equal, consistent gaps between columns and do not widen the grid beyond the agreed content rail.
- Images inside cards stay within the card's image frame, preserve their aspect ratio, and do not determine the card or section gutters.
- A grid can have its own internal card padding; that does not change the grid's outer alignment.

## Spacing

- Regular desktop marketing-page sections use `--site-section-space-desktop: 64px` of vertical padding on each edge. Adjacent sections therefore have 128px between their inner content edges; do not add margins that accidentally stack beyond that rhythm. Hero composition and Journal article templates remain page-specific.
- At desktop, let the section's outer top padding set the distance to its first heading. Do not add an extra top inset inside a heading wrapper. Keep any intentional space below the heading separate.
- Within a text block, keep headings, paragraphs, buttons, and related notes visually grouped but distinct. Buttons need clear breathing room from nearby copy.
- When changing one component, adjust its local gap or margin rather than changing the page rail or neighboring sections.

## Mobile

- Stack multi-column text/image sections into one column when the desktop columns no longer have comfortable reading width. Keep the intended content order and image placement sensible after stacking.
- Keep the shared page gutter, prevent horizontal scrolling, and let text and cards use the available content width. The Journal listing may use a 12px side inset so entry cards do not feel cramped.
- Use `--site-section-space-mobile: clamp(24px, 4vw, 28px)` on standard homepage content sections at widths up to 900px. This gives adjacent section content edges a 48-56px transition. Avoid adding outer margins on top of this spacing.
- This section rhythm applies to section boundaries only. Keep component-internal spacing (card padding, text-to-button gaps, image framing, and hero panel spacing) governed by the component's own rules.
- Keep the mobile hero's image crop, artwork placement, and purple-panel composition page-specific; general section-spacing changes must not alter them.
- Keep the memoir copy and book-update note on the same mobile text rail as the sections above. Stack the memoir feature vertically on phones; do not force its three desktop columns into a narrow three-column phone layout.
- Use the intro section's H2 scale and editorial-copy size/line-height for both memoir headings and both memoir text blocks, including the book-update note.
- On desktop, the memoir cover stays aligned to the content rail while its copy uses the inner text inset. Keep its approved 16px downward image adjustment; do not alter the cover artwork or crop.
- Keep buttons comfortably separated from surrounding text and large enough to tap.
- Keep images responsive and uncropped unless the component explicitly uses a designed crop.
- Validate narrow phones as well as tablet and desktop widths; do not rely on a single breakpoint screenshot.

## Journal Article Template

- Long-form Journal entries use their own article template, not the homepage card or marketing-section template.
- Keep the article hero, its image placement, title treatment, reading content, and related-entry area governed by the article template. Do not apply homepage hero sizing or homepage grid gutters to it.
- On mobile, the article is a single-column reading flow: title and hero image remain legible, body copy uses the available width with comfortable side padding, and related entries stack vertically.
- Journal listing cards are not article pages. They follow the shared content rail on desktop and use the wider 12px side inset on mobile.
- Any future article-template changes should be checked on a full article page and the Journal listing separately.
