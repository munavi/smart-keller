/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import { defineStore }      from 'pinia'
import { reactive, inject } from 'vue'

import config from '../json/config.json'

import defaultSession from '../model/defaultSession'

import type TErrorMessages from '../type/TErrorMessages'
import type TStringRecord  from '../type/TStringRecord'

import jwt_decode from 'jwt-decode'

const
    StoreSession =
        defineStore
        ( 'session',

            () =>
            { const
                //config =
                //  inject('config') as IConfig,

                constraintErrorMessages =
                    reactive(config.constraintErrorMessages as TErrorMessages),

                session =
                    reactive(defaultSession()),

                reset =
                    () =>
                    { Object.assign(session, defaultSession()) },

                saveSessionInfo =
                    ( res: { token: string|null, data: Promise<any> } ) =>
                    { const
                        c_token = session.token

                        session.token        = res.token;
                        session.errorMessage = constraintErrorMessages[(res.data as unknown as TStringRecord).constraint ?? '']

                        if (c_token != null && session.token == null)
                        { reset() } // auto logout if no new token had be passed to the client

                        if (session.token != null)
                        { session.isAdmin = ((jwt_decode(c_token ?? "") as { isAdmin: boolean })?.isAdmin)}
                    }

                return { session, reset, saveSessionInfo }
            }
        )

export default StoreSession
