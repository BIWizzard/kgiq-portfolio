// vite.config.resume.js - Vite config for standalone resume build
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-resume',
    rollupOptions: {
      input: {
        main: 'resume-main.jsx'
      }
    }
  },
  base: '/' // Use root path for kenneth-graham.com
})