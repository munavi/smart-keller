/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @author    Natalya Murashko <natalya.murashko@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import { createRouter, createWebHistory } from 'vue-router'

const
    routes =
        [ { path: '/',
            name: 'Home',
            component: () => import('@/pages/dashboard/DashboardPage.vue'),
        },
            { path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/dashboard/DashboardPage.vue'),
            },
            { path: '/login',
                name: 'LoginPage',
                component: () => import('@/pages/loginPage/LoginPage.vue'),
            },
            { path: '/list',
                name: 'ListPage',
                component: () => import('@/pages/listPage/ListPage.vue'),
            },

            { path:      '/:pathMatch(.*)',
                component: () => import('@/pages/page404/Page404.vue'),
            }
        ],

    router =
        createRouter({ history: createWebHistory(), routes })

export default router
