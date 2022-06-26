/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type TConfig from '../type/TConfig'

const defaultConfig =
    () : TConfig =>
    { return {
        "apiRoot":         "/api/$1",

        "paths":
            { "register": "/api/register",
                "login":    "/api/login",
                "accounts": "/api/accounts"
            },

        "constraintErrorMessages":
            { "":
                    { "properties": [],
                        "message":    null
                    },
            }
    }
    }

export default defaultConfig
