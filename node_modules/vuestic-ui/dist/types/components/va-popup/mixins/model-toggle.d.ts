declare const _default: {
    props: {
        value: BooleanConstructor;
    };
    data(): {
        showing: boolean;
    };
    emits: string[];
    watch: {
        value(val: any): void;
    };
    methods: {
        toggle(evt: any): any;
        show(evt: any): any;
        hide(evt: any): any;
        __removeHistory(): void;
    };
    beforeUnmount(): void;
};
export default _default;
