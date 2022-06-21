/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @author    Natalya Murashko <natalya.murashko@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import StoreUser from '../store/StoreUser'

import {createRouter, createWebHistory, type Router} from 'vue-router';

let l_router: Router | null = null;

const
    router =
        () => {
            const
                storeUser = StoreUser(),

                ifNotAuthorized =
                    (_to: any, _from: any, next: Function) => {
                        if (storeUser.isNotAuthorized) {
                            next()
                        } else {
                            next('/')
                        }
                    },

                ifAuthorized =
                    (_to: any, _from: any, next: Function) => {
                        if (storeUser.isAuthorized) {
                            next()
                        } else {
                            next('/login')
                        }
                    },

                routes =
                    [{
                        path: '/',
                        name: 'Home',
                        component: () => import('../pages/loginPage/LoginPage.vue'),
                    },
                        {
                            beforeEnter: ifNotAuthorized,
                            path: '/login',
                            name: 'LoginPage',
                            component: () => import('../pages/loginPage/LoginPage.vue'),
                        },
                        {
                            beforeEnter: ifAuthorized,
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: () => import('../pages/dashboard/DashboardPage.vue'),
                        },
                        {
                            beforeEnter: ifAuthorized,
                            path: '/list',
                            name: 'ListPage',
                            component: () => import('../pages/listPage/ListPage.vue'),
                        },
                        {
                            beforeEnter: ifAuthorized,
                            path: '/:pathMatch(.*)',
                            component: () => import('../pages/page404/Page404.vue'),
                        },
                    ]

            if (l_router == null) {
                l_router = createRouter({history: createWebHistory(), routes})
            }
            return l_router
        }


// const
//     routes =
//         [ { path: '/',
//             name: 'Home',
//             component: () => import('../pages/dashboard/DashboardPage.vue'),
//         },
//             { path: '/home',
//                 name: 'Dashboard',
//                 component: () => import('../pages/dashboard/DashboardPage.vue'),
//             },
//             { path: '/login',
//                 name: 'LoginPage',
//                 component: () => import('../pages/loginPage/LoginPage.vue'),
//             },
//             { path: '/list',
//                 name: 'ListPage',
//                 component: () => import('../pages/listPage/ListPage.vue'),
//             },
//
//             { path:      '/:pathMatch(.*)',
//                 component: () => import('../pages/page404/Page404.vue'),
//             }
//         ],
//
//     router =
//         createRouter({ history: createWebHistory(), routes })

export default router
