import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";  // Import React integration
import sitemap from '@astrojs/sitemap';
import markdown from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: "https://kljucnarec.rs", // Replace with your site's URL
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    react(),  // Add React integration
    sitemap(),
    markdown()
  ],
});
