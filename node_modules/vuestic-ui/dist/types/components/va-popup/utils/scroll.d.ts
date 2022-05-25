export declare function getScrollTarget(el: HTMLElement | any): any;
export declare function getScrollHeight(el: HTMLElement | any): any;
export declare function getScrollPosition(scrollTarget: HTMLElement | any): any;
export declare function getHorizontalScrollPosition(scrollTarget: HTMLElement | any): any;
export declare function animScrollTo(el: HTMLElement | any, to: any, duration: any): void;
export declare function setScrollPosition(scrollTarget: HTMLElement | any, offset: any, duration: any): void;
export declare function getScrollbarWidth(): number;
export declare function hasScrollbar(el: HTMLElement, onY?: boolean): boolean;
declare const _default: {
    getScrollTarget: typeof getScrollTarget;
    getScrollHeight: typeof getScrollHeight;
    getScrollPosition: typeof getScrollPosition;
    animScrollTo: typeof animScrollTo;
    setScrollPosition: typeof setScrollPosition;
    getScrollbarWidth: typeof getScrollbarWidth;
    hasScrollbar: typeof hasScrollbar;
};
export default _default;
