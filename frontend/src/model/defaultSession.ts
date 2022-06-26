/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type TSession from '../type/TSession'

const defaultSession =
() : TSession =>
{ return {
    token:        null,
    errorMessage: null,
  }
}

export default defaultSession