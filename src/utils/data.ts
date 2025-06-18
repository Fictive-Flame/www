import { getCollection, getEntry } from "astro:content";

export async function getWork() {
  return await getCollection("work");
}

export async function getWorkByCategory(category: string) {
  const work = await getWork();
  return work.filter(({ data: { categories } }) =>
    categories.includes(category),
  );
}

export async function getPosts() {
  return await getCollection("posts");
}

export async function getPost(id) {
  return await getEntry("posts", id);
}

export async function getPage(id) {
  return await getEntry("pages", id);
}

export function formatDate(input) {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export function postDescending(a, b) {
  return b.data.pubDate - a.data.pubDate;
}

export function publishedOnly(a) {
  return new Date(a.data.pubDate) < new Date();
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

export function getWorkCategories(work) {
  return [
    ...new Set(work.map(({ data: { categories } }) => categories).flat()),
  ];
}

export async function getWorkSections() {
  return await getCollection("processes");
}

export const byDate = (a, b) =>
  new Date(b.data.pubDate) - new Date(a.data.pubDate);
