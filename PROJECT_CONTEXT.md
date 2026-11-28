# Dare to Break Free – Project Context and Development Rules

Updated: 27 November 2026

## 1. Project purpose and identity

Dare to Break Free is a personal website and journal sharing honest stories of transformation, recovery and personal growth, supporting the memoir *Dare to Break Free* and inviting readers to share their own stories.

- **Tagline:** Stories of Living, Learning & Letting Go.
- **Audience:** Adults aged approximately 30–65 navigating change, recovery or reinvention.
- **Voice:** Conversational, raw, reflective and unsentimental. Use British English and preserve the author's voice.
- **Objectives:** Encourage reading and engagement, grow the email list, promote the memoir and support Share Your Story enquiries.
- **Design:** Clean, warm, candid, premium and mobile-first, with personal photography and a strong reading experience.
- **Location:** Southampton, UK.

The site is beyond its initial scaffold. Preserve the approved website and refine it rather than treating it as a new build. Do not introduce new offers or features without approval.

## 2. Technical context

- **Stack:** Astro, Markdown content collections and custom CSS.
- **Hosting:** GitHub Pages via GitHub Actions.
- **Website:** https://daretobreakfree.co.uk/
- **Repository:** https://github.com/kaliharmen-hue/dtbf-site
- **Assets:** `public/assets/`
- **Manuscript source:** `docs/manuscript-draft/`
- **Copy drafts:** `docs/copy/`
- **Contact email:** hello@daretobreakfree.co.uk. Prefer contact forms to publicly displaying the email address.

These paths and technical details are carried forward from the original brief. Where relevant to a task, verify them against the current repository. Use the actual implementation for routes, component names, content schemas, form integrations, typography, colours and responsive breakpoints. Do not reinstate superseded May 2026 specifications or assume an old planned feature has been implemented.

## 3. Scope and working practices

- Distinguish discussion, recommendations and requests to implement. Do not edit files when the user is only exploring options.
- Implement the agreed change and preserve unrelated content, functionality and approved design decisions.
- Use established components, styles and patterns. Make the smallest effective change that resolves the underlying requirement properly.
- Make reasonable low-risk decisions within the agreed scope. Ask before making material changes to design, architecture, functionality or scope.
- Avoid unnecessary dependencies, duplication, abstractions, files and configuration. Do not over-engineer.

## 4. Code integrity and CSS ownership

Maintain one authoritative source for each shared design rule. Master CSS means the appropriate authoritative stylesheet, not one enormous stylesheet for the entire website.

- Keep shared typography, colours, gutters, spacing and common responsive behaviour in the appropriate shared stylesheets or design tokens. Use existing variables and reusable classes where suitable.
- Keep genuinely distinct page and component layouts in their appropriate stylesheets. Preserve intentional differences, including journal article reading layouts and approved hero compositions.
- Identify the existing code responsible for a behaviour before changing it. Amend the authoritative declaration or implementation rather than adding another competing rule to mask it.
- Do not stack overrides, arbitrary compensatory offsets, excessive selector specificity or `!important` as shortcuts. Use intentional responsive and state-specific rules where they are genuinely required.
- Keep styling in the appropriate stylesheet. Avoid inline style attributes, embedded page-level CSS and JavaScript-driven styling unless technically necessary. Explain any necessary exception briefly.
- Once a replacement is verified, remove the superseded declarations, patches, overrides, unused selectors and directly associated obsolete code as part of the same task. Do not leave abandoned implementations or temporary fixes behind.
- Before removing code, establish that it is no longer required by other pages, components, responsive breakpoints or interactive states. If uncertain, preserve it and explain the uncertainty.
- Verify the final implementation after removing obsolete code. A change is incomplete if it looks correct but relies on unnecessary competing rules or retains confirmed obsolete code.

Keep the CSS logically organised, reusable and portable. Avoid unnecessary coupling to specific page markup, hosting environments or integrations so the styling can be maintained or adapted if the website moves to another platform.

Address technical debt directly related to the requested change. Flag unrelated issues without expanding the task or undertaking a wider audit unless requested.

## 5. Design, verification and publishing

- Preserve established visual identity, approved layouts, content and unaffected screen sizes.
- Match testing to the scope and risk of the change. For local styling changes, check the affected layout and relevant breakpoints; for shared styling or structural changes, check representative affected pages and relevant interactive states.
- Maintain accessibility (WCAG 2.1 AA as the project baseline), keyboard navigation, meaningful alternative text, security and functional reliability.
- Use visual comparisons when needed to confirm appearance. A successful build alone does not prove that the layout is correct.
- Run relevant build or functional checks and verify the final code, including any cleanup. Do not claim verification that was not performed.
- Publish or deploy only when authorised. Preserve unrelated unpublished work and do not overwrite other changes.

## 6. Efficient execution and continuity

- Inspect only the files and documentation needed for the current task. Broaden the investigation when necessary to establish dependencies or resolve uncertainty.
- Avoid repeatedly scanning unchanged parts of the repository, duplicating checks or generating unnecessary screenshots. Group related changes and checks where practical.
- Avoid unnecessary sub-agents and speculative iterations. If progress stalls or a fix repeatedly fails, explain the obstacle and proposed next step before expanding the work.
- Keep project documentation concise and current. Update this file when significant, approved project decisions change; do not document every minor styling adjustment.
- Keep completion reports concise: what changed, what obsolete code was removed where applicable, what was verified and any remaining limitations.

**Definition of done:** The agreed change works, preserves the rest of the site, is implemented at its appropriate source, contains no confirmed superseded code from that change, and has been proportionately verified. Efficiency must not compromise accuracy, design quality, accessibility, security or maintainability.
