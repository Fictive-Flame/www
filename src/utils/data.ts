import { getCollection } from "astro:content";

export async function getWork() {
  return await getCollection("work");
}
