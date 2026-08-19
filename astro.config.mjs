// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Pages that are intentionally noindex must stay out of the sitemap — listing a
// noindex URL sends Google two contradictory signals.
const excludedFromSitemap = ['/thank-you/', '/404/', '/offer/'];

export default defineConfig({
  site: 'https://builtstronghold.com',
  integrations: [
    sitemap({
      filter: page => !excludedFromSitemap.some(path => page.endsWith(path)),
    }),
  ],
  // GitHub Pages cannot issue real 301s for these, so Astro emits a redirect stub
  // (meta refresh + canonical). Google follows those and consolidates the target,
  // which is what these URLs need — every one of them was live and crawlable
  // before it moved, and they currently return 404.
  //
  // Targets must carry a trailing slash. Without one, GitHub Pages adds a second
  // 301 hop and the stub's canonical points at a URL that itself redirects.
  redirects: {
    '/projects/milton-deck-repair': '/projects/fort-valley-deck-repair/',

    // The blog collection was renamed to news. Only these two posts ever existed
    // under /blog/, so the list is complete rather than a pattern.
    '/blog': '/news/',
    '/blog/kitchen-remodel-cost-flagstaff-az': '/news/kitchen-remodel-cost-flagstaff-az/',
    '/blog/northern-arizona-contractor-guide': '/news/northern-arizona-contractor-guide/',

    // The style quiz shipped under two earlier names before landing on /design/.
    '/style-selector': '/design/',
    '/design-wizard': '/design/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
