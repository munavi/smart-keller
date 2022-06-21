import Router                   from 'express-promise-router'
import validate                 from '../schema/validate.js'
import accountSchema            from '../schema/account-schema.js'
import accountsDB               from '../db/accounts.js'
import { isAuthorized, isAdmin} from '../util/auth.js'
import { refreshToken }         from './auth.js'

const
    accounts = Router()

accounts.route('/')

    // A user gets his/her accountsDB, an admin gets all accounts
    .get
    ( isAuthorized, refreshToken,
        async (req, res) =>
        { const
            {status, data} = await accountsDB.getAccounts(req.isAdmin ? req.query.search : req.id)

            res.status(status).json(data ?? {})
        }
    )

    // An admin can create new accounts, a user can't.
    .post
    ( isAuthorized, isAdmin, validate({ body: accountSchema }), refreshToken,
        async (req, res) =>
        { const
            {result} = await accountsDB.postAccount(req.body),
            proxy    = req.headers["x-forwarded-host"],
            host     = proxy ? proxy : req.headers.host

            res.set('Location', `${req.protocol}://${host}${req.baseUrl}/${result.id}`)
                .status(result.status)
                .json(result)
        }
    )

accounts.route('/:id')

    // A user can request his/her account, an admin can request any account.
    .get
    ( isAuthorized, refreshToken,
        async (req, res) =>
        { if (!req.isAdmin && req.id !== req.params.id)
        { res.status(401).json({message: 'not authorized'}) }

            const
                {status, data} = await accountsDB.getAccount(req.params.id)

            res.status(status).json(data ?? {})
        }
    )

    // A user can change his/her account, an admin can change any account.
    .put
    ( isAuthorized, validate({ body: accountSchema }), refreshToken,
        async (req, res) =>
        { if (!req.isAdmin)
        { if (req.id !== req.params.id)
        { res.status(401).json({message: 'not authorized'}) }
            req.isAdmin = false;  // A non-admin cannot get admin rights.
        }
            const
                {result} = await accountsDB.putAccount(req.params.id, req.body)

            res.status(result.status).json(result)
        }
    )

    // A user can patch his/her account, an admin can patch any account.
    .patch
    ( isAuthorized, validate({ body: accountSchema }), refreshToken,
        async (req, res) =>
        { if (!req.isAdmin)
        { if (req.id !== req.params.id)
        { return res.status(401).json({message: 'not authorized'}) }
            req.body.isAdmin = false  // A non-admin cannot get admin rights.
        }
            const
                {result} = await accountsDB.patchAccount(req.params.id, req.body)

            res.status(result.status).json(result)
        }
    )

    // A user can delete his/her account, an admin can delete any account but the last admin account.
    .delete
    ( isAuthorized, refreshToken,
        async (req, res) =>
        { if (!req.isAdmin && req.id !== req.params.id)
        { res.status(401).json({message: 'not authorized'}) }

            const
                {result} = await accountsDB.deleteAccount(req.params.id, req.body)

            res.status(result.status).json(result)
        }
    )

export
{ accounts,
    accountSchema,
}

export default
{ accounts,
    accountSchema,
}
