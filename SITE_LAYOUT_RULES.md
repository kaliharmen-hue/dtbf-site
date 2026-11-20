# Site Layout Rules

This is the shared reference for page layout decisions. Journal article pages are a separate template and are intentionally not forced into the standard marketing-page layout.

## Heroes

- Keep each page's hero artwork, crop, aspect ratio, and image positioning as designed. Do not resize or recrop hero images as part of a general gutter change.
- Align hero headings and supporting copy to the page's text rail, so the text starts in line with the regular sections below.
- Handle mobile hero composition per page. Keep text readable and artwork visible; do not assume one universal mobile crop.

## Gutters And Margins

- Use a centered content rail capped at 1480px for regular page content. On wide screens, center that rail within the page rather than stretching copy to the viewport edges.
- Use an inner text inset of about 4vw, clamped from 24px to 64px, where a section's design calls for its text to sit inside the outer rail.
- Keep left and right gutters balanced. Headings, copy, and aligned grid edges should share the same rail unless a page-specific design intentionally differs.
- Full-width colour or background bands may extend beyond the text rail; their contents still align to the shared rail.
- The site header and page-specific hero artwork may use their own wider alignment. A wider decorative area does not change the text rail.

## Grids And Cards

- Grid sections use the same outer alignment as regular content. Their headings align with the grid's left edge, not an unrelated page edge.
- Choose the number of columns for the content and available width. Keep equal, consistent gaps between columns and do not widen the grid beyond the agreed content rail.
- Images inside cards stay within the card's image frame, preserve their aspect ratio, and do not determine the card or section gutters.
- A grid can have its own internal card padding; that does not change the grid's outer alignment.

## Spacing

- Preserve generous, consistent vertical space between sections; use each section's established spacing rather than adding one-off offsets to align unrelated blocks.
- Within a text block, keep headings, paragraphs, buttons, and related notes visually grouped but distinct. Buttons need clear breathing room from nearby copy.
- When changing one component, adjust its local gap or margin rather than changing the page rail or neighboring sections.

## Mobile

- Stack multi-column text/image sections into one column when the desktop columns no longer have comfortable reading width. Keep the intended content order and image placement sensible after stacking.
- Keep the shared page gutter, prevent horizontal scrolling, and let text and cards use the available content width. The Journal listing may use a slightly wider mobile rail (12px side inset) so entry cards do not feel cramped.
- Keep the memoir copy and book-update note on the same mobile text rail as the sections above. Stack the memoir feature vertically on phones; do not force its three desktop columns into a narrow three-column phone layout.
- Keep buttons comfortably separated from surrounding text and large enough to tap.
- Keep images responsive and uncropped unless the component explicitly uses a designed crop.
- Validate narrow phones as well as tablet and desktop widths; do not rely on a single breakpoint screenshot.

## Journal Article Template

- Long-form Journal entries use their own article template, not the homepage card or marketing-section template.
- Keep the article hero, its image placement, title treatment, reading content, and related-entry area governed by the article template. Do not apply homepage hero sizing or homepage grid gutters to it.
- On mobile, the article is a single-column reading flow: title and hero image remain legible, body copy uses the available width with comfortable side padding, and related entries stack vertically.
- Journal listing cards are not article pages. They follow the shared content rail on desktop and use the wider 12px side inset on mobile.
- Any future article-template changes should be checked on a full article page and the Journal listing separately.
