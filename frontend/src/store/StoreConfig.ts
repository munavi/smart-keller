/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */

import { defineStore }        from 'pinia'
import { reactive, readonly } from 'vue'

import type TConfig  from '../type/TConfig'
import defaultConfig from '../model/defaultConfig';

const
    StoreConfig =
        defineStore
        ( 'config',

            () =>
            { const
                config =
                    reactive(defaultConfig()),

                reset =
                    (p_config: TConfig|null) =>
                    { Object.assign(config,
                        (p_config != null)
                            ? p_config
                            : defaultConfig()
                    )
                    }

                return { config: readonly(config), reset }
            }
        )

export default StoreConfig

