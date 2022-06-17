import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig
({plugins:
        [ vue(),
            vuetify
            ({ autoImport: true, }),
        ],
    resolve:
        { alias:
                { '@':      fileURLToPath(new URL('./src',                  import.meta.url)),
                    'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
                    '/css':   fileURLToPath(new URL('./src/css',              import.meta.url)),
                }
        },
    server:
        { proxy:
                { '/api':
                        { target:       'http://localhost:4000/',
                            changeOrigin: true,
                            rewrite:      path => path.replace(/^\/api/, '/v1')
                        }
                }
        }
})
