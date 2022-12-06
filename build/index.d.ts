type Callback = (data: any) => void;
declare function dispatch(nameEvent: string, params?: any): void;
declare function subscribe(event: string, callback: Callback): void;
declare function unsubscribe(event: string): void;
declare const _default: {
    dispatch: typeof dispatch;
    subscribe: typeof subscribe;
    unsubscribe: typeof unsubscribe;
};
export default _default;
