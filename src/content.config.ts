import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/work" }),
});

const processes = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/process" }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/post.md", base: "src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      slug: z.string().optional(),
      headerImage: image(),
      headerLink: z.string(),
      headerCredit: z.string(),
      headerAlt: z.string(),
    }),
});

export const collections = {
  work,
  processes,
  posts,
};
