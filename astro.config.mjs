// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

const site = import.meta.env.CF_PAGES_URL || "https://fictiveflame.co";

// https://astro.build/config
export default defineConfig({
  site,
  vite: { plugins: [tailwind()] },
  integrations: [sitemap()],
  adapter: cloudflare(),
});
