export var customEvent = {
    createEvent: function (nameEvent, params) {
        return new CustomEvent(nameEvent, {
            bubbles: false,
            detail: params
        });
    },
    dispatch: function (nameEvent, params) {
        var event = this.createEvent(nameEvent, params);
        window.dispatchEvent(event);
    },
    subscribe: function (event, callback) {
        window.addEventListener(event, function (e) {
            var data = e.detail;
            callback && callback(data);
        });
    },
    unsubscribe: function (event) {
        var _this = this;
        window.removeEventListener(event, function () {
            _this.removeSubscribe(event);
        });
    }
};
export var dispatch = customEvent.dispatch;
export var subscribe = customEvent.subscribe;
export var unsubscribe = customEvent.unsubscribe;
