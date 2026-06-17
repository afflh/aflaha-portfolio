import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works when served from a subpath (e.g. GitHub Pages / static host).
export default defineConfig({
  base: './',
  plugins: [react()],
})
