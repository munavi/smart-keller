import express from 'express'
import path    from 'path'
import pg       from 'pg'

//import morgan  from 'morgan'

let db;

const
    { PORT        = 3000,
        SERVER      = `http://localhost:${PORT}`,
        PG_HOSTNAME = 'localhost',
        PG_USER     = 'web',
        PG_PASSWORD = 'web',
        PG_DATABASE = 'hello',
        PG_PORT     =  5432,
    }             = process.env,
    c_app         = express(),
    c_dirname     = path.resolve(path.dirname(process.argv[1])),
    c_pool        = new pg.Pool
    ({"host":     PG_HOSTNAME,
        "user":     PG_USER,
        "password": PG_PASSWORD,
        "database": PG_DATABASE,
        "port":     PG_PORT,
    }),

    select_data  =
        async (req) =>
        { try
        { const
            { lang } = req.params,  // lang = req.params.lang
            { rows } = await c_pool.query
            (`SELECT data from i18n($1::VARCHAR)`,
                [lang]
            );
            // SQL-Injection: id='${lang}' => lang === `'; DELETE * FROM hello; SELECT '`
            //console.log(rows);
            return rows[0].data;
        }
        catch (error)
        { console.log(error);
            res.status(500).json({_type_: 'ERROR', _status_: 500, _message_: error.message});
            // The error message should be stored in the database or somewhere else.
            // To the user only a unique message id should be passed.
        }
        }

// Middleware for debugging
//c_app.use(morgan("combined"));

/*
c_app.use
( function (req, res, next)
  { console.log(req);
    next();
  }
);
*/

c_app.get
( '/',
    (req, res) =>
    { res.sendFile('./index.html', {root: c_dirname }); }
);

c_app.get
( '/v1/:lang',
    async (req, res) =>
        res.status(200).json(await select_data(req))
);

c_app.get
( '/v1/:lang/:type',
    async (req, res) =>
    { const { type } = req.params
        res.status(200).json((await select_data(req))[type])
    }
);

c_app.listen(PORT);

console.log(`Running on ${SERVER}`);
