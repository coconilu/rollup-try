System.register(['lodash'], (function (exports) {
  'use strict';
  var throttle;
  return {
    setters: [function (module) {
      throttle = module.throttle;
    }],
    execute: (function () {

      const Button = 'Button';

      console.log(Button);

      const throttleFn = exports('throttleFn', throttle(() => {
        console.log("throttle");
      }));

      const rollup = exports('rollup', rollup);

    })
  };
}));
