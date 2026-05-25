import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    visibility: z.enum(["public", "private", "client", "academic", "experiment"]),
    featured: z.boolean(),
    date: z.string(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    stack: z.array(z.string()),
    capabilities: z.array(z.string()),
    metrics: z.array(z.string()).optional(),
    order: z.number(),
    lang: z.enum(["en", "ru"]),
    canonicalSlug: z.string(),
    architecture: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
