import { WritableComputedRef } from 'vue';
export declare function useHovered<T>(onHover: (args: T | null) => any): {
    hovered: WritableComputedRef<T | null>;
};
