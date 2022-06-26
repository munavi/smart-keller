/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import {defineStore} from 'pinia'
import {reactive, computed} from 'vue'

import config from '../json/config.json'

import type TAccount from '../type/TAccount'
import type TStringRecord from '../type/TStringRecord'

import defaultAccount from '../model/defaultAccount'

import StoreSession from '../store/StoreSession'

import jwt_decode from 'jwt-decode'

import {getJson, postJson, patchJson, deleteJson} from '../service/rest'

const
    StoreUser =
        defineStore
        ('user',

            () => {
                const
                    paths =
                        config.paths,

                    user =
                        reactive(defaultAccount()),

                    storeSession =
                        StoreSession(),

                    session =
                        storeSession.session,

                    saveSessionInfo =
                        storeSession.saveSessionInfo,

                    reset =
                        () => {
                            storeSession.reset();
                            Object.assign(user, defaultAccount());
                        },

                    getUser =
                        async (id: string) => {
                            const res = await getJson(session.token, `${paths.accounts}/${id}`);
                            saveSessionInfo(res);
                            Object.assign(user,
                                (res.status === 200)
                                    ? (res.data as unknown as TAccount)
                                    : defaultAccount()
                            );
                            return res.status < 300
                        },

                    patchUser =
                        async () => {
                            const res = await patchJson(session.token, `${paths.accounts}/${user.id}`, user);
                            saveSessionInfo(res);
                            return res.status < 300
                        },

                    deleteUser =
                        async () => {
                            const res = await deleteJson(session.token, `${paths.accounts}/${user.id}`);
                            saveSessionInfo(res);
                            return res.status < 300
                        },

                    register =
                        async () => {
                            const res = await postJson(null, paths.register, user);
                            saveSessionInfo(res);

                            if (res.status === 201) {
                                return login()
                            }

                            return res.status < 300
                        },

                    login =
                        async () => {
                            const
                                res =
                                    await postJson
                                    (session.token, // null
                                        paths.login,
                                        {
                                            user: user.email
                                                    ? user.email.trim()
                                                    : null,
                                            password: user.password ? user.password.trim() : '',
                                        }
                                    )

                            if (res.status === 200) {
                                const
                                    c_token = (res.token as string),
                                    c_payload = jwt_decode(c_token) as unknown as TStringRecord;
                                session.token = c_token;

                                await getUser(c_payload.id);
                                user.password = undefined; // don't store the password
                            } else {
                                reset()
                            } // reset the session

                            return res.status < 300
                        },

                    logout = reset,

                    isNotAuthorized = computed(() => !session.token),
                    isAuthorized = computed(() => !!session.token) // bug: Token muss gültig sein

                return {
                    user, register, login, logout, reset, getUser, patchUser, deleteUser,
                    isNotAuthorized, isAuthorized
                }
            }
        )

export default StoreUser
