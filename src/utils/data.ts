import { getCollection } from "astro:content";

export async function getWork() {
  return await getCollection("work");
}

export async function getWorkByCategory(category: string) {
  const work = await getWork();
  return work.filter(({ data: { categories } }) =>
    categories.includes(category),
  );
}

export function slugify(input: string): string {
  input = input.replace(/^\s+|\s+$/g, "");
  input = input.toLowerCase();
  input = input
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return input;
}

export function workUrlFor(title: string): string {
  return `/work/${slugify(title)}`;
}
