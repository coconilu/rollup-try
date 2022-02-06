(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd = {}));
})(this, (function (exports) { 'use strict';

	const Button = 'Button';

	console.log(Button);

	const rollup = rollup;

	exports.rollup = rollup;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
