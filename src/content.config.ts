import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Images live in src/assets/ and go through astro:assets, so the schema uses
// the image() helper rather than a plain string. That gives every <Image> a
// build-time width/height and a generated srcset — the raw <img> tags in
// public/ had neither.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(['remodeling', 'restoration', 'new-build', 'repair']),
      location: z.string(),
      description: z.string(),
      completedDate: z.string(),
      featured: z.boolean().default(false),
      beforeImage: image().optional(),
      afterImage: image(),
      gallery: z.array(image()).optional(),
      highlights: z.array(z.string()).optional(),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Stronghold Construction'),
      category: z.string(),
      tags: z.array(z.string()),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { projects, news };
