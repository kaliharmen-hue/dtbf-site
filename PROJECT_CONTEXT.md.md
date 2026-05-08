# PROJECT_CONTEXT – Dare to Break Free

> **Version:** May 2026 · *Living, Learning & Letting Go*

---

## 1 · Project Summary

| Field                 | Value                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project name**      | **Dare to Break Free**                                                                                                                              |
| **What it is**        | A raw, honest blog and digital home that shares stories of transformation while building momentum for a forthcoming memoir.                         |
| **Main goal**         | Publish compelling posts, grow an engaged email list, promote the 2026 book release, and invite readers into a new “Share Your Story” offer.        |
| **Target audience**   | Adults (30-65) navigating change, recovery, or reinvention; readers who enjoy memoir-style storytelling around addiction, trauma, and growth.       |
| **Main user actions** | 1) Read posts   2) Subscribe to newsletter   3) Pre-order / learn about the book   4) Enquire about **Share Your Story** offer   5) Comment & share |
| **Current stage**     | **Early build** – brand assets and draft content ready; site scaffold in progress.                                                                  |

---

## 2 · What Is Already Decided

| Field                      | Decision                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Brand name**             | Dare to Break Free                                                                                                                                                                  |
| **Tagline**                | *Stories of Living, Learning & Letting Go*                                                                                                                                          |
| **Tone**                   | Conversational · raw · reflective · unsentimental                                                                                                                                   |
| **Core offers**            | Free blog posts · Email newsletter · Community comments                                                                                                                             |
| **Secondary offers**       | **Upcoming memoir (2026)** – dedicated page + pre-order CTA · **Share Your Story** page — helping others tell their stories (contact form) · Future workshops/podcast (placeholder) |
| **Not offering (yet)**     | 1-to-1 coaching packages · Paid membership · Merchandise                                                                                                                            |
| **Location (SEO / trust)** | Southampton, UK                                                                                                                                                                     |

---

## 3 · Technical Setup

| Layer               | Decision / Status                                                                     |
| ------------------- | ------------------------------------------------------------------------------------- |
| **Website stack**   | Astro + Markdown content collections + custom CSS                                     |
| **Hosting**         | GitHub Pages via GitHub Actions                                                       |
| **Domain**          | **daretobreakfree.co.uk** (registered, to be pointed to GitHub Pages)                 |
| **Email**           | [hello@daretobreakfree.co.uk](mailto:hello@daretobreakfree.co.uk); provider TBD       |
| **Forms / contact** | Formspree endpoint for `/contact` and `/share-your-story`                             |
| **Repo path**       | `github.com/kaliharmen-hue/dtbf-site`                                                 |
| **Live URL**        | [https://daretobreakfree.co.uk/](https://daretobreakfree.co.uk/)                      |
| **GitHub repo**     | [https://github.com/kaliharmen-hue/dtbf-site](https://github.com/kaliharmen-hue/dtbf-site) |

---

## 4 · Information Architecture & Routes

| Route               | Purpose                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `/`                 | **Home** – Hero, intro, latest posts, newsletter CTA, book teaser                                           |
| `/blog`             | Blog index (paginated)                                                                                      |
| `/blog/[slug]`      | Individual post                                                                                             |
| `/book`             | **Book Page –** synopsis, cover reveal, pre-order links, author Q&A                                         |
| `/share-your-story` | **Offer Page –** excerpt from book’s ending, explanation of the "Share Your Story" invitation, contact form |
| `/about`            | Author bio & story                                                                                          |
| `/contact`          | General contact / newsletter signup                                                                         |
| `/404`              | Custom not-found                                                                                            |

**Shared Components**
`HeaderNav`, `HeroBanner`, `PostCard`, `PostBody`, `BookTeaser`, `OfferSection`, `NewsletterSignup`, `Footer`.

---

## 5 · Content Model

```yaml
Post:
  title: string
  slug: string
  date: ISODate
  excerpt: string
  tags: [string]
  coverImage: string
  body: MDX
Book:
  title: string
  isbn: string
  releaseDate: ISODate
  coverImage: string
  description: string (MDX)
  preorderLinks:
    - retailer: string
      url: string
Offer:
  title: string            # "Share Your Story"
  intro: string (MDX)      # excerpt from book
  details: string (MDX)    # how it works, outcomes
  ctaLabel: string         # "Contact Me"
```

---

## 6 · Design Guidelines

* **Vibe:** Minimal, warm, candid, handwritten accents
* **Palette:**

  * Background (light): #FFFFFF · (dark): #1F1F1F
  * Text: #2D2D2D
  * Accent: #E95F46
* **Typography:**

  * Headings – “Playfair Display”, serif
  * Body – “Inter”, sans-serif
* **Imagery:** Full-width banners, personal photography, book cover mock-ups
* **Layout:** 2 rem baseline grid, 0.75 rem rounded corners
* **Accessibility:** WCAG 2.1 AA, keyboard nav, alt-text, prefers-color-scheme.

---

## 7 · Working Rules

1. **Make reasonable assumptions and keep moving.**
2. Explain decisions simply.
3. Prefer building over describing.
4. Keep the site clean, premium, mobile-first.
5. Suggest and implement better structures kindly.
6. Future-proof, but don’t over-engineer v1.

---

## 8 · Important Project Context

| Asset           | Path                       |
| --------------- | -------------------------- |
| Main brief      | `/docs/PROJECT_CONTEXT.md` |
| Source material | `/docs/manuscript-draft/`  |
| Images / assets | `/public/assets/`          |
| Copy drafts     | `/docs/copy/`              |

---

## 9 · Current Priorities

1. Scaffold **/share-your-story** page with excerpt & contact form.
2. Implement newsletter + contact forms via Formspree.
3. Deploy MVP to GitHub Pages and share preview.

---

## 10 · Lessons From Last Build

* Keep single source-of-truth brief (this file).
* Separate overview vs. deep-dive pages.
* Hide public email; use forms.
* Build nav & mobile behavior early.
* Structure image handling from day one.
* Finalize route structure before content flood.

---

## 11 · Recommended Startup Order

1. Clarify offer & book CTA.
2. Confirm pages / routes.
3. Finalize stack, hosting, domain, email.
4. Build skeleton pages + navigation.
5. Add copy & images via live prototype.
6. Iterate copy, layout, accessibility.

---

> **Next Step** – use Codex to scaffold `/share-your-story` page with the provided excerpt and a contact form that posts to Formspree.
