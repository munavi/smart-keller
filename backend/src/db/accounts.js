import { query }  from './index.js'

const
    getAccountsAll =
        async () =>
        { return {
            status: 200,
            data:   (await query
                (`SELECT "id", "name", "user", "email", "isAdmin"
                   FROM   "account"
                  `
                )
            ).rows
        }
        },

    getAccountSearch =
        async (key) =>
        { const
            c_uuid_regex =
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
            c_result = // UUID and CARCHAR are not type compatible. So, a combined OR-query would fail.
                key.match(c_uuid_regex)
                    ? await query
                    (`SELECT "id", "name", "user", "email", "isAdmin" 
            FROM   "account"
            WHERE  "id" = $1::UUID
           `,
                        [key]
                    )
                    : await query
                    (`SELECT "id", "name", "user", "email", "isAdmin"
            FROM   "account"
            WHERE  lower("name")  LIKE lower($1::VARCHAR || '%') OR 
                   lower("user")  LIKE lower($1::VARCHAR || '%') OR
                   lower("email") LIKE lower($1::VARCHAR || '%')
           `,
                        [key]
                    );

            return { status: 200, data: c_result.rows}
        },

    getAccounts =
        async (key) =>
        { return key ? getAccountSearch(key) : getAccountsAll() },

    getAccount =
        async (id) =>
        { const
            c_result =
                await query
                ( `SELECT "id", "name", "user", "email", "isAdmin" 
         FROM   "account"
         WHERE  $1::UUID = id
        `,
                    [id]
                );

            return { status: 200, data: c_result.rows[0]}
        },

    postAccount =
        async (data) =>
        { const
            c_result =
                await query
                ( `SELECT "result" FROM post_account($1)`, [data])

            return c_result.rows[0]
        },

    putAccount =
        async (id, data) =>
        { const
            c_result =
                await query
                ( `SELECT "result" FROM put_account($1, $2)`, [id, data])

            return c_result.rows[0]
        },

    patchAccount =
        async (id, data) =>
        { const
            c_result =
                await query
                ( `SELECT "result" FROM patch_account($1, $2)`, [id, data])

            return c_result.rows[0]
        },

    deleteAccount =
        async (id) =>
        { const
            c_result =
                await query
                ( `SELECT "result" FROM delete_account($1)`, [id])

            return c_result.rows[0]
        }

export
{ getAccounts,
    postAccount,
    getAccount,
    putAccount,
    patchAccount,
    deleteAccount,
}

export default
{ getAccounts,
    postAccount,
    getAccount,
    putAccount,
    patchAccount,
    deleteAccount,
}
