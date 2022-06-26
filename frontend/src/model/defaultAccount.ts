/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type TAccount from '../type/TAccount'

const defaultAccount =
(): TAccount =>
{ return {
    id:       '',
    user:     undefined,
    password: undefined,
    name:     undefined,
    email:    undefined,
    isAdmin:  false,
  }
}

export default defaultAccount