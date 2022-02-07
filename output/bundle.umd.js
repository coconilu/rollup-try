(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd = {}, global.lodash));
})(this, (function (exports, lodash) { 'use strict';

  const Button = 'Button';

  console.log(Button);

  const throttleFn = lodash.throttle(() => {
    console.log("throttle");
  });

  const rollup = rollup;

  exports.rollup = rollup;
  exports.throttleFn = throttleFn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
