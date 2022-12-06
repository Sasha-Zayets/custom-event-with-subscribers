function createEvent(nameEvent, params) {
    return new CustomEvent(nameEvent, {
        bubbles: false,
        detail: params
    });
}
function dispatch(nameEvent, params) {
    var event = createEvent(nameEvent, params);
    window.dispatchEvent(event);
}
function subscribe(event, callback) {
    window.addEventListener(event, function (e) {
        var data = e.detail;
        callback && callback(data);
    });
}
function unsubscribe(event) {
    window.removeEventListener(event, function () { });
}
export default {
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe
};
