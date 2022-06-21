import express from 'express'
import morgan from 'morgan'

import * as uuid from 'uuid'
import {auth} from './routes/auth.js'
import {accounts} from './routes/accounts.js'
import {ValidationError} from 'express-json-validator-middleware'

const
    {
        PORT = 3000,
        SERVER = `http://localhost:${PORT}`,
    } = process.env,
    c_app = express(),
    c_uuid = uuid.v4;


c_app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.header('Content-Type', 'application/json');
    next();
});

// Middleware for debugging
c_app.use(morgan("combined"));

// Middleware for debugging
/*
c_app.use
( function (req, res, next)
  { console.log(req.params, req.headers);
    next();
  }
);
*/

// Middleware that automatically converts incoming data into JSON:
c_app.use(express.json());

c_app.use('/v1', auth);
c_app.use('/v1/accounts', accounts);

// For testing purposes sometimes a uuid is needed.
c_app.get('/v1/uuid', (req, res) => res.status(200).json(c_uuid()));

c_app.use((error, req, res, next) => {
        if (error instanceof ValidationError) {
            res.status(400).send(error.validationErrors);
            next();
        } else {
            next(error);
        }
    }
);

c_app.listen(PORT);

console.log(`Running on ${SERVER}`);
