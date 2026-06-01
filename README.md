# Stronghold928 — Website Project

General contractor based in Flagstaff, AZ. Specializing in remodeling, restoration, new single-family and multi-family construction, and repair projects across northern Arizona.

**Brand:** Red, white, and black. Minimal brutalist design.
**Values:** Integrity, honesty, trusted/knowledgeable friend, community development, safe and soul-refreshing homes.
**Differentiator:** Guided design process for clients who want a remodel but don't know their style. ([style-selector](https://stronghold928.github.io/style-selector))

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

#### Style Selector (`/style-selector`) ✓
- [x] 5-step guided questionnaire with text and image-choice question types
- [x] Weighted scoring across 4 style profiles (Modern Warm, Southwest Organic, Industrial Modern, Classic Refined)
- [x] Results page: style name, tagline, description, color palette swatches, materials list
- [x] CTA to contact with `?ref=style-selector` param for tracking
- [x] Retake button — resets scores and restarts
- [x] Vanilla JS only, no framework dependency, works fully statically

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

### Style Selector Architecture (Phase 1)

The style selector (`/style-selector`) is a fully static page with client-side vanilla JavaScript. No server, no database, no framework.

**How it works:**
- 5 questions defined in the Astro frontmatter as a `questions` array
- Each answer has a `weights` object mapping profile IDs to numeric scores
- On answer selection, weights are accumulated into a `scores` object
- After question 5, the highest-scoring profile ID wins
- Results are rendered by finding the matching profile object and populating the DOM

**4 style profiles:** Modern Warm, Southwest Organic, Industrial Modern, Classic Refined

**To add a profile:** add to the `profiles` array in `style-selector.astro` frontmatter and add weights for the new profile ID in question answers.

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
