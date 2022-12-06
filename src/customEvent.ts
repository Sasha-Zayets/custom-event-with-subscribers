type Callback = (data: any) => void;

export const customEvent = {
    createEvent(nameEvent: string, params: any): CustomEvent {
        return new CustomEvent(nameEvent, {
            bubbles: false,
            detail: params,
        });
    },

    dispatch(nameEvent: string, params: any): void {
        const event = this.createEvent(nameEvent, params);
        window.dispatchEvent(event);
    },

    subscribe(event: string, callback: Callback) {
        window.addEventListener(event, (e: CustomEvent) => {
            const data = e.detail;
            callback && callback(data);
        });
    },

    unsubscribe(event: string) {
        window.removeEventListener(event, () => {
            this.removeSubscribe(event);
        });
    },
};

export const dispatch = customEvent.dispatch;
export const subscribe = customEvent.subscribe;
export const unsubscribe = customEvent.unsubscribe;
