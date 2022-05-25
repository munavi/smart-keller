export declare const isSSR: boolean;
export declare let fromSSR: boolean;
export declare let onSSR: boolean;
export declare function hasWebStorage(): any;
declare const _default: {
    has: {
        touch: boolean;
        webStorage: boolean;
    };
    parseSSR(ssr: any): any;
    install($q: any, queues: any, Vue: any): void;
};
export default _default;
