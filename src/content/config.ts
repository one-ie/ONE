// Types
// Type-check frontmatter using a schema
import { defineCollection, z } from "astro:content";

// Blog
const blog = defineCollection({

  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    // Transform string to date
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

// Docs
const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Activities
const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});



export const collections = { blog , docs, guides };
