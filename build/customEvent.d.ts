type Callback = (data: any) => void;
export declare const customEvent: {
    createEvent(nameEvent: string, params: any): CustomEvent;
    dispatch(nameEvent: string, params: any): void;
    subscribe(event: string, callback: Callback): void;
    unsubscribe(event: string): void;
};
export declare const dispatch: (nameEvent: string, params: any) => void;
export declare const subscribe: (event: string, callback: Callback) => void;
export declare const unsubscribe: (event: string) => void;
export {};
