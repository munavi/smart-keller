import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig
({plugins: [vue()],
    resolve:
        { alias:
                { '@':      fileURLToPath(new URL('./src',                  import.meta.url)),
                    'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
                    '/css':   fileURLToPath(new URL('./src/css',              import.meta.url)),
                }
        },
    server:
        { host: true,
            proxy:
                { '/api':
                        { target:       'http://backend:4000/',
                            changeOrigin: true,
                            rewrite:      path => path.replace(/^\/api/, '/v1')
                        }
                }
        }
})
