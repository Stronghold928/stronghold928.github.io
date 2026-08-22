# TODO

Nothing outstanding.

## Adding a service area

Add an entry to `src/data/service-areas.ts` and everything else follows: the
`[city].astro` dynamic route generates the page, and the nav dropdown, footer,
service areas index, contact sidebar, and sitemap all read from the same array.

Hardcoded city lists that do **not** read from that array and need updating by
hand: the `areaServed` block in `src/layouts/Layout.astro`, the coverage answers
in `src/pages/faq.astro` and `src/data/services.ts`, and the sidebar note and
meta descriptions on `src/pages/quote.astro` and `src/pages/service-areas/index.astro`.
