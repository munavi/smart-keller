/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @author    Natalya Murashko <natalya.murashko@hs-augsburg.de>
 * @copyright 2016-2022
 * @license   MIT
 */

/**
 * @class ControllerKey
 */
class ControllerKey
{ private readonly v_key_events: Array<string>
    private readonly f_callback:   EventListener // KeyboardEventListener doesn't esits ...

    /**
     * @param p_keys       The name of a keyboard key or an array of such names
     * @param p_callback   A callback function that is called when focus is
     *                     on an HTML element with a matching id and if a key event
     *                     occurs for some of the stated keys.
     * @param p_targets    The id of an HTML element or an array of such ids.
     * @param p_key_events a key eben or a list of key events: 'keydown', 'keyup' or 'keypress'
     */
    constructor
    ( p_keys:       string | Array<string>,
      p_callback:   (p_key?: string, p_target?: string) => void,
      p_targets:    string | Array<string> | null = null,
      p_key_events: 'keydown' | 'keyup' | 'keypress' = 'keydown'
    )
    { this.v_key_events = typeof p_key_events === 'string'
        ? [p_key_events]
        : p_key_events;

        const
            c_keys    = typeof p_keys    === 'string' ? [p_keys] : p_keys,
            c_targets = typeof p_targets === 'string' ? [p_targets] : p_targets
        ;

        this.f_callback =
            (p_event: Event) => // (p_event: KeyboardEvent) =>
            { const
                c_key    = (p_event        as KeyboardEvent)   .key,
                c_target = (p_event.target as HTMLInputElement).id;

                if (c_keys.includes(c_key) && (!c_targets || c_targets.includes(c_target)))
                { // Prevent other handlers from handling the keypress event.
                    p_event.preventDefault();
                    p_event.stopPropagation();
                    // Invoke the callback function
                    p_callback(c_key, c_target);
                }
            }
    }

    /** Adds the key handler described by this object as keyboard event handler. */
    add()
    { for (const l_key_event of this.v_key_events)
    { window.addEventListener(l_key_event, this.f_callback) }
    }

    /** Removes the key handler described by this object  as keyboard event handler. */
    remove()
    { for (const l_key_event of this.v_key_events)
    { window.removeEventListener(l_key_event, this.f_callback) }
    }
}

export default ControllerKey
