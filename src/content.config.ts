import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['remodeling', 'restoration', 'new-build', 'repair']),
    location: z.string(),
    description: z.string(),
    completedDate: z.string(),
    featured: z.boolean().default(false),
    beforeImage: z.string().optional(),
    afterImage: z.string(),
    gallery: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Stronghold Construction'),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { projects, news };
