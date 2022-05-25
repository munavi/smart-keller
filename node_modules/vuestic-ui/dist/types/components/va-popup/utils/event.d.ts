export declare const listenOpts: {};
export declare function leftClick(e: any): boolean;
export declare function middleClick(e: any): boolean;
export declare function rightClick(e: any): boolean;
export declare function getEventKey(e: any): any;
export declare function position(e: any): {
    top: any;
    left: any;
};
export declare function targetElement(e: any): any;
export declare function getEventPath(e: any): any;
export declare function getMouseWheelDistance(e: any): {
    x: any;
    y: any;
};
export declare function stopAndPrevent(e: any): void;
declare const _default: {
    listenOpts: {};
    leftClick: typeof leftClick;
    middleClick: typeof middleClick;
    rightClick: typeof rightClick;
    getEventKey: typeof getEventKey;
    position: typeof position;
    targetElement: typeof targetElement;
    getEventPath: typeof getEventPath;
    getMouseWheelDistance: typeof getMouseWheelDistance;
    stopAndPrevent: typeof stopAndPrevent;
};
export default _default;
