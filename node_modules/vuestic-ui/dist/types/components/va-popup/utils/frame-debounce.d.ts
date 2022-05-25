export default function (fn: any): {
    (...args: any): void;
    cancel(): void;
};
