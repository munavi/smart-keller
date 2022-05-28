/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @author    Natalya Murashko <natalya.murashko@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard                           from 'src/pages/dashboard/Dashboard.vue'

const
    routes =
        [ { path: '/',
            name: 'Home',
            component: Dashboard,
        },
            { path: '/hello',
                name: 'Hello',
                component: () => import('@/view/ViewHello.vue'),
            },
            { path:      '/:pathMatch(.*)',
                component: () => import('@/view/View404.vue'),
            }
        ],

    router =
        createRouter({ history: createWebHistory(), routes })

export default router
