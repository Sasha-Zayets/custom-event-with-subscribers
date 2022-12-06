type Callback = (data: any) => void;

function createEvent(nameEvent: string, params?: any): CustomEvent {
    return new CustomEvent(nameEvent, {
        bubbles: false,
        detail: params,
    });
}

function dispatch(nameEvent: string, params?: any): void {
    const event = createEvent(nameEvent, params);
    window.dispatchEvent(event);
}

function subscribe(event: string, callback: Callback) {
    window.addEventListener(event, (e: CustomEvent) => {
        const data = e.detail;
        callback && callback(data);
    });
}

function unsubscribe(event: string) {
    window.removeEventListener(event, () => {});
}

export default {
    dispatch,
    subscribe,
    unsubscribe,
};
