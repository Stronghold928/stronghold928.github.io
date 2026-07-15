// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://builtstronghold.com',
  integrations: [sitemap()],
  redirects: {
    '/projects/milton-deck-repair': '/projects/fort-valley-deck-repair',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});