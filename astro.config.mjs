// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://seowithgaluh.netlify.app",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      //  Hilangkan halaman yang tidak perlu (contoh: 404)
      filter: (page) => !page.includes("/404"),

      // Atur meta tambahan (SEO-friendly)
      serialize(item) {
        return {
          url: item.url,
          changefreq: "always",
          priority: item.url.endsWith("/") ? 1.0 : 0.7,
        };
      },
    }),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://seowithgaluh.netlify.app/sitemap-index.xml",
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
