/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import {defineStore} from 'pinia'
import {reactive} from 'vue'

import config from '../json/config.json'

import type IAccount from '../interface/IAccount'

import StoreSession from '../store/StoreSession'
import defaultAccount from '../model/defaultAccount'

import {postJson, getJson, putJson, deleteJson} from '../service/rest'


const
    StoreAccount =
        defineStore
        ('smart-keller',

            () => {
                const
                    paths =
                        config.paths,

                    storeSession =
                        StoreSession(),

                    session =
                        storeSession.session,

                    saveSessionInfo =
                        storeSession.saveSessionInfo,

                    data: { section: string, account: IAccount, accounts: Array<IAccount> } =
                        reactive({section: 'accounts', account: defaultAccount(), accounts: []}),

                    reset =
                        () => {
                            data.section = 'accounts';
                            data.account = defaultAccount();
                            data.accounts.length = 0;
                        },

                    getAccounts =
                        async () => {
                            const res = await getJson(session.token, paths.accounts);
                            saveSessionInfo(res);
                            if (res.status === 200) {
                                reset();
                                data.accounts = res.data;
                            }
                            return res.status === 200
                        },

                    resetAccount =
                        () => {
                            data.account = defaultAccount()
                        },

                    getAccount =
                        async (id: string) => {
                            const res = await getJson(session.token, `${paths.accounts}\${id}`);
                            saveSessionInfo(res);
                            if (res.status === 200) {
                                data.account = res.data
                            }
                            return res.status === 200
                        },

                    newAccount =
                        async (account: IAccount) => // should be done by put
                        {
                            console.log(account);
                            const res = await postJson(session.token, paths.accounts, account);
                            saveSessionInfo(res);
                            return res.status === 201
                        },

                    putAccount =
                        async (account: IAccount) => {
                            const res = await putJson(session.token, `${paths.accounts}/${account.id}`, account);
                            saveSessionInfo(res);
                            return res.status === 200
                        },

                    deleteAccount =
                        async (id: string) => {
                            const res = await deleteJson(session.token, `${paths.accounts}/${id}`);
                            saveSessionInfo(res);
                            return res.status === 200
                        }

                return {
                    data, reset, resetAccount,
                    getAccounts,
                    getAccount, newAccount, putAccount, deleteAccount
                }
            }
        )

export default StoreAccount
