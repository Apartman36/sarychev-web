import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE_URL = "https://Apartman36.github.io";
const BASE_PATH = "/sarychev-web/";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
