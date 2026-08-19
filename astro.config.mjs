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
  redirects: {
    '/projects/milton-deck-repair': '/projects/fort-valley-deck-repair/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
