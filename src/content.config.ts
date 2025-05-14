import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/work" }),
});

const processes = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/process" }),
});

export const collections = {
  work,
  processes,
};
