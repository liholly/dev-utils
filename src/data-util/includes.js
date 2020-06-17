/**
 * 判断数组中是否存在某个值
 * 区别于lodash target可以传入函数当作条件
 */
import each from './each.js'
import isFunction from './isFunction.js'

export default function (arr, target) {
	var __has = false;

	each(arr, function (val) {
		if (isFunction(target) && target(val)) __has = true;
		else if (target === val) __has = true;

		if (__has) return false;
	});

	return __has;
}