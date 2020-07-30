/**
 * 防抖函数
 * @param fn    源函数
 * @param delay    延迟时间
 * @returns {*}
 */
export default function (fn, delay) {
	var __present = true;
	var __arguments;

	return function () {
		__arguments = arguments;

		//在既定时间内只执行一次
		if (__present) {
			__present = false;
			setTimeout(function () {
				fn.apply(null, __arguments);
				__present = true;
			}, delay || 0)
		}
	}
}