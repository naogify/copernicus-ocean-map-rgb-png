import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/copernicus-ocean-map-rgb-png/' : '/',
  build: {
    sourcemap: true
  }
})
