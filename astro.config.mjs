import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';  // Change this import

// https://astro.build/config
export default defineConfig({
  site: "https://kljucnarec.rs",
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    react(),
    sitemap(),
    mdx()  // Change this line
  ],
});