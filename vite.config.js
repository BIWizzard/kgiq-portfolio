import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [
        postcssImport,
        require('@tailwindcss/postcss'), // inline usage here
        autoprefixer
      ]
    },
    devSourcemap: true,
  },
});
