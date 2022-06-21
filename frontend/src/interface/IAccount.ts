/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2022
 * @license   MIT
 */

type IAccount =
{ id:       string,
  user:     string|undefined,
  password: string|undefined,
  name:     string|undefined,
  email:    string|undefined,
  isAdmin:  boolean,
} 

export default IAccount