import each from './each.js'
import isFunction from './isFunction.js'

export default function (agg, target) {
	var res;

	each(agg, function (val, index) {
		res = index;
		if (isFunction(target) ? target(val, index) : (val === target)) return false;
	});

	return res;
}