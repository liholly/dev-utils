/**
 * 枚举元素的父元素
 * @param el    起始元素
 * @param fn    枚举方法
 * @returns {*}
 */
export default function (el, fn) {
	while (el.parentNode !== null && fn) {
		el = el.parentNode;
		var _a = fn(el);
		if (_a === false) break;
	}
}