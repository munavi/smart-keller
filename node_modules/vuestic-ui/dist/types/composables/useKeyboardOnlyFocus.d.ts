export default function useKeyboardOnlyFocus(): {
    hasKeyboardFocus: import("vue").Ref<boolean>;
    keyboardFocusListeners: {
        mousedown: () => void;
        focus: () => void;
        blur: () => void;
    };
};
