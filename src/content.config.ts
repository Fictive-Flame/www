import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "src/content/work/**/*.md" }),
});

export const collections = {
  work,
};
