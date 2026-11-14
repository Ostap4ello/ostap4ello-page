import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const markdownCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([])
  })
});

const miscCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/misc' }),
  schema: markdownCollection.schema
});

export const collections = {
  docs: markdownCollection,
  misc: miscCollection
};
