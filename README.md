# Stronghold928 — Website Project

General contractor based in Flagstaff, AZ. Specializing in remodeling, restoration, new single-family and multi-family construction, and repair projects across northern Arizona.

**Brand:** Red, white, and black. Minimal brutalist design.
**Values:** Integrity, honesty, trusted/knowledgeable friend, community development, safe and soul-refreshing homes.
**Differentiator:** Guided design process for clients who want a remodel but don't know their style. ([style-selector](https://stronghold928.github.io/style-selector))
- Phase 1 (complete): style quiz → style reveal → 7-step design wizard → full summary with consultation CTA
- Three style profiles: Organic Modern, European Modern, Transitional Modern (sourced from Clear Creek Collective guides)

---

## Architecture Overview

### Tech Stack Decisions

| Layer | Choice | Rationale |
|---|---|---|
| Site framework | **Astro** (static-first) | Fast, zero-JS by default, GitHub Pages native, scales to React islands |
| Styling | **Tailwind CSS** | Utility-first, easy to enforce brand tokens, pairs well with brutalist aesthetic |
| Client/Worker portal (Phase 2) | **Supabase** | Postgres + auth + real-time, generous free tier, no backend server needed |
| Payments (Phase 3) | **Stripe** | Industry standard, handles invoicing and payment collection |
| CMS for project showcases | **Markdown files + Astro Content Collections** | Zero cost, git-tracked, easy to hand off editing. Astro v6 glob loader in `src/content.config.ts` |
| Hosting | **GitHub Pages** | Already using `stronghold928.github.io` domain |

### Site Structure (MVP → Full)

```
stronghold928.github.io/
├── /                        # Landing page — hero, services, featured projects, CTA
├── /services                # Services breakdown (remodel, restore, new build, repair)
├── /projects                # Project showcase gallery
├── /style-selector          # Guided design process tool
├── /about                   # Company story, values, team
├── /contact                 # Contact form + service area map
│
├── /portal/login            # Phase 2 — unified login (client or worker)
├── /portal/client/          # Client dashboard
│   ├── dashboard            #   Overview — active projects, outstanding items
│   ├── quotes               #   View submitted/approved quotes
│   ├── projects/[id]        #   Project detail — progress, schedule, docs
│   ├── design               #   Design selections and style-selector results
│   ├── payments             #   Pay invoices, add payment method
│   └── requests             #   Submit new work requests
│
└── /portal/worker/          # Worker/subcontractor dashboard
    ├── dashboard            #   Active assignments
    ├── time                 #   Submit time entries
    └── expenses             #   Submit expense reports with receipts
```

### Design System

- **Typefaces:** Space Grotesk (headings) — geometric, industrial. Inter (body) — clean, readable.
- **Colors:**
  - `--red: #CC0000`
  - `--black: #0A0A0A`
  - `--white: #F5F5F5`
  - `--gray: #2A2A2A` (surface/card backgrounds)
- **Style notes:** Heavy borders, raw grid layouts, high contrast, minimal decoration. Images as full-bleed blocks. Buttons are solid with hard offset shadows (no border-radius or subtle). Typography does heavy lifting.
- **Motion:** Minimal. Snap transitions only — no swooping animations.

---

## MVP Scope

The MVP is a fully styled public-facing marketing site with no portal functionality. Goal: establish brand presence, showcase services, and capture leads.

**MVP includes:**
- Landing page with hero, services overview, and featured project section
- Services page
- Project showcase (static, 3–5 sample projects from markdown)
- About page
- Contact page with functional form (Formspree or Netlify Forms — no backend needed)
- Style-selector page (guided design questionnaire, static)
- Mobile responsive
- Deployed to GitHub Pages

**MVP excludes:**
- Client/worker portal (Phase 2)
- Real project photos (Unsplash representative photos used; swap in real photos by updating frontmatter `afterImage`/`beforeImage` URLs)
- CMS editing UI (files edited directly in `src/content/projects/`)
- Payments (Phase 3)

---

## To-Do

### Phase 0 — Setup ✓
- [x] Initialize Astro project with Tailwind CSS
- [x] Configure GitHub Pages deployment (GitHub Actions workflow)
- [x] Establish design tokens (colors, type scale, spacing) in Tailwind config
- [x] Create base layout component (nav, footer)
- [x] Set up brand font imports (Space Grotesk + Inter via Google Fonts)

#### Landing Page skeleton
- [x] Hero section — full-bleed, bold headline, subheadline, primary CTA ("Get a Quote")
- [x] Services overview strip — 4 service tiles (Remodel, Restore, New Build, Repair)
- [x] Projects teaser section (placeholder cards)
- [x] Values/trust strip — integrity, honesty, trusted friend messaging
- [x] Design guide callout
- [x] Footer — contact info, service area, nav links, license number placeholder

### Phase 1 — MVP Public Site ✓

#### Landing Page (`/`) ✓
- [x] Hero section — full-bleed, bold headline with `928` watermark, red accent, primary CTA
- [x] Services overview strip — 4 service tiles with hover state
- [x] Featured projects section — pulls `featured: true` entries from content collection
- [x] Values/trust strip — Integrity, Honesty, Community pillars
- [x] Design guide callout (red full-bleed section)
- [x] Footer — contact info, service area, nav links, license number placeholder

#### Services Page (`/services`) ✓
- [x] Remodeling section with photo, description, 6-step process, guided design CTA
- [x] Restoration section with photo and 5-step process
- [x] New Construction section (single-family and multi-family) with photo and 6-step process
- [x] Individual Repairs section with photo and 4-step process
- [x] Sticky jump-nav for each service section
- [x] Service area callout (northern Arizona / Flagstaff)
- [x] Alternating photo-left / photo-right layout per section

#### Projects Page (`/projects`) ✓
- [x] Auto-fill grid pulling from content collection, sorted by `completedDate` desc
- [x] Filter bar (All / Remodeling / Restoration / New Build / Repair) — client-side JS
- [x] Individual project pages at `/projects/[slug]` with before/after layout
- [x] Project detail: highlights sidebar, prose body from markdown, gallery grid
- [x] 5 sample projects with Unsplash representative photos

#### Style Selector (`/style-selector`) ✓ — rebuilt as full two-phase design wizard
- [x] **Phase 1 (Quiz):** 5-question quiz (text + image answers) with weighted scoring → Organic Modern, European Modern, or Transitional Modern
- [x] **Phase 2 (Reveal):** Style reveal screen with large style name, tagline, 5 labeled palette swatches, description, and 4 Style DNA principles
- [x] **Phase 3 (Wizard):** 7-step design decision wizard (Flooring → Cabinetry → Countertops → Tile → Lighting → Paint → Decor)
  - Sticky header: style name, palette dots, "Step X of 7", 7 clickable step-dot nav
  - Each step: "Why This Comes First" box, 3 style-specific option cards (one tagged "Most Aligned"), Splurge vs. Save two-column guidance
  - Option card selection tracked with red border + hard shadow; Back/Next/Finish navigation
- [x] **Phase 4 (Summary):** All 7 decisions in a numbered grid, style-specific guardrail filter questions, "Book a Design Consultation →" CTA to `/contact?ref=design-wizard`, "Start Over" reset
- [x] Vanilla JS state machine only — no framework, no storage needed, fully static
- [x] Original 4-profile quiz (Modern Warm, Southwest Organic, Industrial Modern, Classic Refined) replaced in full; URL `/style-selector` preserved

#### About Page (`/about`) ✓
- [x] Company origin and mission with italic blockquote callout
- [x] Values section — Integrity, Honesty, Community in 3-column grid
- [x] Team section — 3 placeholder cards (owner, PM, design coordinator)
- [x] Community involvement section with 4 real initiatives listed

#### Contact Page (`/contact`) ✓
- [x] Contact form: name, phone, email, project type (dropdown), address, timeline (dropdown), message
- [x] Async Formspree submission with success/error handling (no page reload)
- [x] Phone and email displayed prominently in sidebar
- [x] Service area tag list
- [x] Design guide cross-link in sidebar
- [x] License placeholder with clear [Pending] label
- **Action required:** Replace `FORMSPREE_URL` in `src/pages/contact.astro` with real Formspree form ID

#### Quality & Polish
- [x] Open Graph meta tags (title, description, image) on all pages via Layout
- [x] Canonical URL on every page
- [x] Mobile responsive — all pages tested in build
- [ ] Lighthouse performance and accessibility audit (run post-deploy)
- [ ] Real favicon / brand SVG asset
- [ ] Replace phone/email placeholders with real contact details

### Phase 2 — Client & Worker Portal
- [ ] Supabase project setup (auth, DB schema)
- [ ] Unified login page with role routing
- [ ] **Client portal:** dashboard, quotes view, project detail, design selections, payment, new request form
- [ ] **Worker portal:** dashboard, time submission, expense submission with photo upload
- [ ] Row-level security policies (clients see only their data)
- [ ] Admin view for Stronghold928 team

### Phase 3 — Payments & Advanced Features
- [ ] Stripe integration for invoice payment
- [ ] Invoice generation and PDF export
- [ ] Email notifications (project updates, payment receipts)
- [ ] Project photo upload (client and worker)
- [ ] Mobile PWA packaging (optional)

---

## Architectural & Design Decisions

### Content Collections (Phase 1)

Projects live in `src/content/projects/*.md` as Markdown files with YAML frontmatter. The schema is defined in `src/content.config.ts` using Astro v6's glob loader.

**To add a real project:** copy any existing `.md` file in `src/content/projects/`, update the frontmatter fields (especially `afterImage`, `beforeImage` with real photo URLs or local paths in `/public/`), and set `featured: true` if it should appear on the landing page.

**Frontmatter schema:**
```yaml
title: string          # Project name
type: remodeling | restoration | new-build | repair
location: string       # "City, AZ"
description: string    # 1–2 sentence summary (used in cards and OG meta)
completedDate: "YYYY-MM"
featured: true | false # Shows on landing page if true
beforeImage: url       # Optional — enables before/after layout on detail page
afterImage: url        # Required — primary photo
gallery: [url, ...]    # Optional — additional photos shown in gallery strip
highlights: [string]   # Optional — bullet points shown in sidebar on detail page
```

### Photo Sourcing (Phase 1)

Representative photos for the project showcase and style-selector are sourced from [Unsplash](https://unsplash.com), which provides free-to-use high-resolution images. The Unsplash image URL format used is:
```
https://images.unsplash.com/photo-{id}?w={width}&auto=format&fit=crop&q=80
```

These are external URLs that load from Unsplash's CDN. When real project photos are available:
1. Place them in `/public/images/projects/`
2. Reference as `/images/projects/your-photo.jpg` in frontmatter
3. Remove the Unsplash URLs

### Style Selector Architecture (Phase 1 → rebuilt)

The style selector (`/style-selector`) is a fully static page driven by a client-side vanilla JavaScript state machine. No server, no database, no framework. The original 4-profile quiz was replaced with a full two-phase design wizard in a single session.

#### State machine

All data (style profiles, quiz questions, wizard steps) is defined in Astro frontmatter as typed arrays and passed to the `<script>` block via `define:vars`. The script holds a `state` object:

```javascript
const state = {
  quizStep: 1,
  scores: { 'organic-modern': 0, 'european-modern': 0, 'transitional-modern': 0 },
  selectedStyle: null,    // set after quiz, used throughout wizard + summary
  wizardStep: 1,
  wizardSelections: {},   // stepId → optionId
  wizardLabels: {},       // stepId → human-readable option label (for summary)
};
```

Four phases are managed via `showPhase(phase)` which toggles `display:none/block` on `#phase-quiz`, `#phase-reveal`, `#phase-wizard`, `#phase-summary`.

#### Data structure

**Style profiles** (`styles` array): id, name, tagline, description, palette (5 hex colors), paletteNames, dna (4 principles), guardrails (4 filter questions).

**Quiz questions** (`quizQuestions` array): 5 questions, each with `type: 'text' | 'image'` and answers carrying a `weights` object mapping profile IDs to scores. Highest score after 5 questions wins.

**Wizard steps** (`wizardSteps` array): 7 steps. Each has `id`, `title`, `subtitle`, `why` text, `splurge`/`save` guidance, and an `options` object keyed by style ID — each style gets 3 options with `id`, `label`, `desc`, and optional `tag: 'Most Aligned'`.

#### Why wizard options are rendered in JavaScript, not Astro template

Each wizard step has 3 options × 3 styles = 9 option cards per step, 63 total. Rendering all in static HTML (with CSS show/hide) would bloat the DOM. Instead, `renderWizardOptions(stepId, styleId)` injects only the 3 cards for the selected style via `innerHTML` at wizard-init time.

**Consequence:** dynamically injected elements don't receive Astro's scoped CSS data attribute, so scoped styles don't apply. A `<style is:global>` block covers all classes used only in dynamic HTML (`.wizard-option-card`, `.wizard-dot`, `.palette-swatch`, `.summary-item`, `.guardrail-item`, etc.). Static-element styles remain in the normal scoped `<style>` block.

#### `data-step` collision bug (fixed)

Both quiz question blocks and wizard step blocks use `data-step="1"` through `data-step="5"`. The original `showQuizQuestion()` used `document.querySelector('[data-step="${step}"]')` which would match whichever came first in the DOM. Fixed by scoping to the quiz container:
```javascript
document.querySelector('#quiz-questions-container [data-step="${step}"]')
```
`showWizardStep()` was already scoped to `#wizard-steps-container` and was not affected.

#### Three style profiles (replacing original four)

| Profile ID | Name | Character |
|---|---|---|
| `organic-modern` | Organic Modern | Natural materials, light oak, texture-forward, earthy neutrals |
| `european-modern` | European Modern | Collected/timeless, White Dove, unlacquered brass, arched details |
| `transitional-modern` | Transitional Modern | Classic meets modern, bold contrast moments, Pale Oak + Wrought Iron |

Source material: Clear Creek Collective Quickstart Guide PDFs (purchased; individual-use license). Content in code is original — style names are generic industry terms, decision order is generic design advice. PDFs are not committed to the repo.

#### Style decision order (same across all three styles)

The 7-step wizard follows the same sequence for all styles — this order is intentional and matches how professional designers sequence decisions (each step narrows what comes next):

1. Flooring & Wood Tone — sets the tonal foundation; everything calibrates to it
2. Cabinetry Style & Finish — drives paint, tile, hardware, and lighting direction
3. Countertops — critical cohesion point between cabinetry and wall color
4. Tile & Grout — easier once cabinetry and paint are locked; grout color matters as much as tile
5. Lighting — statement fixtures must be chosen before rough-in/framing
6. Paint & Wall Treatments — always chosen last, after hard finishes are decided
7. Decor & Textiles — final layer, allowed to evolve over time

**To add a 4th style:** add to the `styles` array, add weights for the new ID in quiz question answers, and add an `options[newStyleId]` block in each of the 7 wizard steps.

**To add an 8th wizard step:** add to the `wizardSteps` array; update `TOTAL_WIZARD = 7` to `TOTAL_WIZARD = 8` in the script.

### Contact Form (Phase 1)

The contact form submits to [Formspree](https://formspree.io) via async fetch. No backend required.

**To activate:**
1. Sign up at formspree.io
2. Create a form, copy the form ID (e.g. `xabcd123`)
3. In `src/pages/contact.astro`, replace `FORMSPREE_URL` with `https://formspree.io/f/{your-id}`

The form includes a honeypot field (`_gotcha`) to reduce spam.

### Brutalist Design System Decisions

| Decision | Choice | Why |
|---|---|---|
| No border-radius | `border-radius: 0` everywhere | Core to brutalist aesthetic; softened corners signal a different design language |
| Hard offset shadows | `box-shadow: 4px 4px 0 {color}` | Brutalist signature — dimensional without blur or diffusion |
| Red as strike accent | Used on labels, borders, underlines | Not fill — red as emphasis only, not background wash |
| Typography as structure | Large type does layout work | Headlines define sections; no decorative dividers needed |
| `direction: rtl` alternation | Services page alternates photo side | Clean reversal without duplicating CSS layout code |

### Astro Scoped CSS Limitation

Astro's component `<style>` blocks are scoped by adding a unique `data-astro-cid-*` attribute to every element rendered in the template. CSS selectors are compiled with that attribute as a qualifier (e.g. `.wizard-option-card` → `.wizard-option-card[data-astro-cid-xxxx]`).

**Elements injected via `innerHTML` at runtime do not receive the scoping attribute.** They are invisible to scoped styles. The pattern used in this project:

- Static elements → normal scoped `<style>` block (at bottom of `.astro` file)
- Dynamically-injected elements → `<style is:global>` block immediately after the scoped block

Use specific, page-prefixed class names in the global block to avoid leaking styles to other pages. Example prefix convention used: `wizard-`, `reveal-`, `summary-`, `option-`.

**Descendant selectors do work across the boundary** — e.g. `.reveal-dna li` works because the parent `.reveal-dna` is a static element and the child `li` elements only need to be DOM descendants, not attribute-matched. Use this to minimize the global block size.

### Astro v6 Content Collections Note

Astro v6 removed the legacy `src/content/config.ts` format. Collections now require:
- Config file at `src/content.config.ts` (root of `src/`, not inside `content/`)
- Each collection must have a `loader` defined (we use `glob`)
- Routes use `entry.id` (not `entry.slug`)
- `render()` is imported from `astro:content`, not called as `entry.render()`

---

## Development Setup

```bash
# Clone and install
npm install

# Dev server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

**Node version requirement:** `>=22.12.0` (Astro v6 compatibility). CI/CD workflow pins Node 24.

**Claude Code preview server:** `.claude/launch.json` configures the dev server for use with Claude Code's preview tools. The configuration points to `npm run dev` on port 4321. This file is committed so Claude Code can use `preview_start` without manual setup.

Deployment: push to `main` → GitHub Actions builds → deploys to GitHub Pages automatically. Requires GitHub Pages set to "GitHub Actions" source in repo Settings → Pages.

---

## Action Items Before Launch

| Item | File | Notes |
|---|---|---|
| Replace Formspree URL | `src/pages/contact.astro` | Sign up at formspree.io, get form ID |
| Replace phone number | `src/components/Nav.astro`, `Footer.astro`, `contact.astro` | Currently `(928) 555-0100` |
| Replace email | `src/components/Footer.astro`, `contact.astro` | Currently `hello@stronghold928.com` |
| Add AZ ROC license number | `src/components/Footer.astro`, `contact.astro` | Labeled `[Pending]` |
| Enable GitHub Pages | GitHub repo Settings → Pages | Set source to "GitHub Actions" |
| Replace placeholder team photos | `src/pages/about.astro` | Unsplash placeholder images in team section |
| Swap in real project photos | `src/content/projects/*.md` | Update `afterImage`/`beforeImage` in frontmatter |
| Real favicon | `public/favicon.svg` | Brand mark SVG needed |

---

## Notes

- Style-selector lives at `/style-selector` and is referenced externally — maintain that URL permanently.
- All portal routes (Phase 2) must be auth-gated; no sensitive data exposed publicly.
- The `completedDate` field in project frontmatter controls sort order. Format: `"YYYY-MM"`.
- License number placeholder intentional — replace when AZ ROC number is confirmed.
