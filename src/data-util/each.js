import isArray from './isArray.js'
import isFunction from './isFunction.js'
import isObject from './isObject.js'
import isString from './isString.js'
import isEmpty from './isEmpty.js'

export default function (agg, fn) {
	if (isEmpty(agg) || !isFunction(fn)) return;

	var i, __agg = isString(agg) ? agg.split('') : agg;

	if (isArray(__agg)) {
		for (i = 0; i < __agg.length; i++) {
			if (fn(__agg[i], i) === false) break;
		}
	}
	else if (isObject(__agg)) {
		var k, index = 0;
		for (k in __agg) {
			if (fn(__agg[k], k, index++) === false) break;
		}
	}
}