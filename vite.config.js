import { defineConfig } from 'vite'
import symfonyPlugin from 'vite-plugin-symfony'

export default defineConfig({
  plugins: [
    symfonyPlugin()
  ],
  base: '/app/build',
  build: {
    outDir: './public/app/build',
    assetsDir: './assets',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        app: './assets/js/app.js',
        theme: './assets/scss/main.scss'
      }
    }
  }
})
