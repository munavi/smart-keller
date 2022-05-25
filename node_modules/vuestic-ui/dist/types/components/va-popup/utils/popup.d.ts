export declare function getAnchorPosition(el: any, offset: any): {
    top: any;
    left: any;
    width: any;
    height: any;
};
export declare function getTargetPosition(el: any): {
    top: number;
    center: number;
    bottom: any;
    left: number;
    middle: number;
    right: any;
};
export declare function repositionIfNeeded(anchor: any, target: any, selfOrigin: any, anchorOrigin: any, targetPosition: any, cover: any): any;
export declare function parseHorizTransformOrigin(pos: any): any;
export declare function setPosition({ el, animate, anchorEl, anchorOrigin, selfOrigin, maxHeight, event, anchorClick, touchPosition, offset, touchOffset, cover }: {
    el: any;
    animate: any;
    anchorEl: any;
    anchorOrigin: any;
    selfOrigin: any;
    maxHeight: any;
    event: any;
    anchorClick: any;
    touchPosition: any;
    offset: any;
    touchOffset: any;
    cover: any;
}): void;
export declare function positionValidator(pos: any): boolean;
export declare function offsetValidator(val: any): boolean;
export declare function parsePosition(pos: any): {
    vertical: any;
    horizontal: any;
};
