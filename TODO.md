# TODO

## Commercial — before this ships

- **Formspree endpoint.** `src/pages/commercial/bid-request.astro` points at
  `https://formspree.io/f/REPLACE_ME`. The form is inert until this is a real
  endpoint. The residential quote and contact forms each have their own; this is
  deliberately a third so commercial enquiries stay separable.
- **Bonding capacity and insurance limits.** `capabilities` in
  `src/data/commercial.ts` renders `value: null` as "Available on request".
  Replace with real figures once confirmed. Do not invent one.

## Commercial — planned

- **Case studies.** Completed commercial jobs exist but have no usable
  photography. Plan is a `commercial-projects` content collection with a
  text-led card (sector, city, square footage, duration, occupied or not,
  scope, outcome, year), kept separate from the `projects` collection because
  the residential card requires an `afterImage` to render.
- **Ground-up commercial construction.** A fourth service line in
  `src/data/commercial.ts`. Deliberately absent from the launch set, not an
  oversight.
- **Sector pages.** Office and retail are currently named sections on the
  tenant improvement page. They earn their own pages once a case study backs
  each one — five thin sector pages competing with each other is worse than
  two good sections.

## Adding a service area

Add an entry to `src/data/service-areas.ts` and everything else follows: the
`[city].astro` dynamic route generates the page, and the nav dropdown, footer,
service areas index, contact sidebar, capabilities page, and sitemap all read
from the same array.

## Adding a commercial service line

Same pattern — add an entry to `commercialServices` in `src/data/commercial.ts`
and the `commercial/[slug].astro` route, hub, nav dropdown, footer, and
capabilities page all pick it up.

## City lists that are hardcoded

These do **not** read from `service-areas.ts` and need updating by hand: the
`areaServed` block in `src/layouts/Layout.astro`, the coverage answers in
`src/pages/faq.astro` and `src/data/services.ts`, and the sidebar note and meta
descriptions on `src/pages/quote.astro` and `src/pages/service-areas/index.astro`.

## Nav breakpoint

The top bar now carries eight items and collapses to the hamburger at 1080px.
`NAV_COLLAPSE_PX` in `src/components/Nav.astro`'s script and the
`@media (max-width: 1080px)` query in its styles must stay in step. Adding a
ninth top-level item will need the bar rethought rather than the breakpoint
raised again.
