import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";  // Import React integration

// https://astro.build/config
export default defineConfig({
  site: "https://master--kreatif-software.netlify.app",
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    react()  // Add React integration
  ],
});
