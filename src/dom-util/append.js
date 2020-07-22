/**
 * appendChild的别名函数
 * 允许一次性追加多个元素
 * @param el 容器
 * @returns {*}
 */
export default function (el) {
	var _i;
	for (_i = 0; _i < arguments.length; _i++) {
		if (_i === 0) continue;
		el.appendChild(arguments[_i]);
	}

	return el;
}