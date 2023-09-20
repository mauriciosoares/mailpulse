import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

console.log(process.env.NODE_ENV);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), alpinejs(), react()],
  site:
    process.env.NODE_ENV !== "development"
      ? "https://mauriciosoares.github.io"
      : undefined,
  base: process.env.NODE_ENV !== "development" ? "/mailpulse" : undefined,
});
