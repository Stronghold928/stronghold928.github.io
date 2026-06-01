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
| CMS for project showcases | **Markdown/MDX files** | Zero cost, git-tracked, easy to hand off editing |
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
- Real project photos (placeholders used)
- CMS editing UI (files edited directly)
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

### Phase 1 — MVP Public Site

#### Landing Page (`/`)
- [ ] Hero section — full-bleed, bold headline, subheadline, primary CTA ("Get a Quote")
- [ ] Services overview strip — 4 service tiles (Remodel, Restore, New Build, Repair)
- [ ] Featured projects section — 2–3 project cards pulled from markdown
- [ ] Values/trust strip — integrity, honesty, trusted friend messaging
- [ ] Community/giving-back callout
- [ ] Footer — contact info, service area, nav links, license number placeholder

#### Services Page (`/services`)
- [ ] Remodeling section — description, process overview, guided design CTA
- [ ] Restoration section
- [ ] New Construction section (single-family and multi-family)
- [ ] Individual Repairs section
- [ ] Service area callout (northern Arizona / Flagstaff)

#### Projects Page (`/projects`)
- [ ] Grid gallery layout
- [ ] Individual project markdown schema (title, type, location, description, before/after images)
- [ ] 3–5 placeholder/sample projects populated
- [ ] Filter by project type (optional stretch)

#### Style Selector (`/style-selector`)
- [ ] Multi-step guided questionnaire (lifestyle, aesthetic preferences, material preferences)
- [ ] Results summary page showing recommended style profile
- [ ] CTA to contact/schedule a consultation
- [ ] Save/share results link (optional stretch)

#### About Page (`/about`)
- [ ] Company origin and mission statement
- [ ] Values section (integrity, honesty, community)
- [ ] Team section (placeholder cards)
- [ ] Community involvement callout

#### Contact Page (`/contact`)
- [ ] Contact form (name, email, phone, project type, message)
- [ ] Wire to Formspree (no backend)
- [ ] Service area map embed (Google Maps or static image)
- [ ] Phone and email display

#### Quality & Polish
- [ ] Mobile responsiveness audit (all pages)
- [ ] Lighthouse performance and accessibility pass
- [ ] Open Graph meta tags (social sharing previews)
- [ ] Favicon and brand assets

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

## Development Setup

```bash
npm create astro@latest . -- --template minimal
npx astro add tailwind
npm run dev
```

Deployment: push to `main` triggers GitHub Actions → builds and deploys to GitHub Pages.

---

## Notes

- License number placeholder in footer until AZ ROC number is confirmed.
- Style-selector lives at `/style-selector` and is referenced externally — maintain that URL permanently.
- All portal routes must be auth-gated; no sensitive data exposed publicly.
