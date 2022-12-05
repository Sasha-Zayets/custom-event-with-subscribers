export const customEvent = {
    createEvent(nameEvent, params) {
        return new CustomEvent(nameEvent, {
            bubbles: false,
            detail: params,
        });
    },

    dispatch(nameEvent, params) {
        const event = this.createEvent(nameEvent, params);
        window.dispatchEvent(event);
    },

    subscribe(event, callback) {
        window.addEventListener(event, (e) => {
            const data = e.detail;
            callback && callback(data);
        });
    },

    unsubscribe(event) {
        window.removeEventListener(event, () => {
            this.removeSubscribe(event);
        });
    },
};
