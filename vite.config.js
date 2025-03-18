import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  }
})
