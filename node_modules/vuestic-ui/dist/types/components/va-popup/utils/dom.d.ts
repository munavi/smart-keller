export declare function offset(el: any): {
    top: any;
    left: any;
};
export declare function style(el: any, property: any): string;
export declare function height(el: any): number;
export declare function width(el: any): number;
export declare function css(element: any, css: any): void;
export declare function ready(fn: any): any;
export declare function cssTransform(val: any): {
    transform: any;
};
declare const _default: {
    offset: typeof offset;
    style: typeof style;
    height: typeof height;
    width: typeof width;
    css: typeof css;
    ready: typeof ready;
    cssTransform: typeof cssTransform;
};
export default _default;
