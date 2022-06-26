/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import type TJsonAtom from '../type/TJsonAtom'
import type TStringRecord from '../type/TStringRecord';

const
  f_options = 
    ( p_method: string, p_token: string|null,
      p_data: Record<string, TJsonAtom>|null = null
    ) =>
    { return { method:  p_method,
               headers: 
               { 'Accept': 'application/vnd.api+json',
                 'Content-Type': 'application/json',
                 ...(p_token ? {'Authorization': `Bearer ${p_token}`} : {})
               },
               ...(p_data ? { body: JSON.stringify(p_data) } : {})
             }
    },
    
  f_json = 
    async ( p_method: string, p_token: string|null, p_url: string, 
            p_data: Record<string, TJsonAtom>|null = null
          ) =>
    { const 
        res = await fetch(p_url, f_options(p_method, p_token, p_data)),
        headers: TStringRecord = {}
      
      res.headers
         .forEach((value:string, name: string) => headers[name] = value)

      return { status:     res.status, 
               statusText: res.statusText, 
               headers:    headers,
               token:      headers.authorization ? headers.authorization.split(' ')[1] : null,
               data:       await res.json(),
             }
    };

async function getJson(p_token: string|null, p_url: string)
{ const res = await f_json('GET', p_token, p_url);
  
  if (res.status === 200)
  { return res }
  else
  { throw new Error(`'${p_url}' not found`) }
}

async function postJson(p_token: string|null, p_url: string, p_data: Record<string, TJsonAtom> = {})
{ return await f_json('POST', p_token, p_url,  p_data) }

async function putJson(p_token: string|null, p_url: string, p_data: Record<string, TJsonAtom> = {})
{ return await f_json('PUT', p_token, p_url,  p_data) }

async function patchJson(p_token: string|null, p_url: string, p_data: Record<string, TJsonAtom> = {})
{ return await f_json('PATCH', p_token, p_url,  p_data) }

async function deleteJson(p_token: string|null, p_url: string)
{ return await f_json('DELETE', p_token, p_url) }

export
{ getJson, postJson, putJson,  patchJson, deleteJson}

export default
{ getJson, postJson, putJson,  patchJson, deleteJson}