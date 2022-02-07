define(['exports', 'lodash'], (function (exports, lodash) { 'use strict';

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
