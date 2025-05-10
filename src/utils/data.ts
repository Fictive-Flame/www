import { getCollection } from "astro:content";

export async function getWork() {
  return await getCollection("work");
}

export function slugify(input: string) {
  input = input.replace(/^\s+|\s+$/g, "");
  input = input.toLowerCase();
  input = input
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return input;
}
