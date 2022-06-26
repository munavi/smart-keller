/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type TStringRecord  from './TStringRecord'
import type TErrorMessages from './TErrorMessages'

type TConfig =
    { "apiRoot":                 string,
        "paths":                   TStringRecord,
        "constraintErrorMessages": TErrorMessages
    }

export default TConfig