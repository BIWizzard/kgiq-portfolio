// vite.config.resume.js - Vite config for standalone resume build
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist-resume',
    rollupOptions: {
      input: resolve(__dirname, 'index-resume.html')
    }
  },
  server: {
    // Force dev server to use index-resume.html
    open: '/index-resume.html'
  },
  base: '/' // Use root path for kenneth-graham.com
})