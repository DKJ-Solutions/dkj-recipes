import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Eén Markdown-bestand per recept in recipes/. De frontmatter volgt dit schema; de tekst eronder is
// de bereiding. Bestanden die met een _ beginnen (zoals het sjabloon) worden overgeslagen.
const ingredient = z.object({
  naam: z.string(),
  hoeveelheid: z.number().positive().optional(),
  eenheid: z.string().optional(),
  afdeling: z.string().optional(),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './recipes' }),
  schema: z.object({
    titel: z.string(),
    porties: z.number().int().positive().optional(),
    tijd: z.number().int().positive().optional(),
    tags: z.array(z.string()).default([]),
    bron: z.string().optional(),
    ingredienten: z.array(ingredient).min(1),
  }),
});

export const collections = { recipes };
