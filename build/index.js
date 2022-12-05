"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _customEvent = require("./customEvent");
Object.keys(_customEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customEvent[key];
    }
  });
});