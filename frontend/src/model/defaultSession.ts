/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

import type ISession from '@/interface/ISession'

const defaultSession =
() : ISession =>
{ return {
    token:        null,
    errorMessage: null,
    isAdmin:      false,
  }
}

export default defaultSession