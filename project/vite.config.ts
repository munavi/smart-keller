import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({reactivityTransform: true})],
  resolve: {
    alias:
        { '@':      fileURLToPath(new URL('./src',                  import.meta.url)),
          'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
          '/css':   fileURLToPath(new URL('./src/css',              import.meta.url)),
        }
  }
})
