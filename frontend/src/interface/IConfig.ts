/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type TStringRecord  from './TStringRecord'
import type TErrorMessages from './TErrorMessages'

interface Config
{ "apiRoot":                 string,
  "paths":                   TStringRecord,
  "constraintErrorMessages": TErrorMessages
} 

export default Config