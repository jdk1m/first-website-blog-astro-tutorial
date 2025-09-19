import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
   site: "https://first-astro-blog-tutorial.netlify.app/"
});