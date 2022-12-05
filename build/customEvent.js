"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customEvent = void 0;
var customEvent = {
  createEvent: function createEvent(nameEvent, params) {
    return new CustomEvent(nameEvent, {
      bubbles: false,
      detail: params
    });
  },
  dispatch: function dispatch(nameEvent, params) {
    var event = this.createEvent(nameEvent, params);
    window.dispatchEvent(event);
  },
  subscribe: function subscribe(event, callback) {
    window.addEventListener(event, function (e) {
      var data = e.detail;
      callback && callback(data);
    });
  },
  unsubscribe: function unsubscribe(event) {
    var _this = this;
    window.removeEventListener(event, function () {
      _this.removeSubscribe(event);
    });
  }
};
exports.customEvent = customEvent;