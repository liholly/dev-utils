import getParent from './getParent.js'

/**
 * 枚举元素的父元素
 * @param el    起始元素
 * @param fn    枚举方法
 * @returns {*}
 */
export default function (el, fn) {
	while (getParent(el) && fn) {
		el = getParent(el);
		var _a = fn(el);
		if (_a === false) break;
	}
}