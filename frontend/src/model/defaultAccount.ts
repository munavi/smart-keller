/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type IAccount from '../interface/IAccount'

const defaultAccount =
(): IAccount =>
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