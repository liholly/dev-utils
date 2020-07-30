/**
 * 节流函数
 * @param fn    源函数
 * @param overtime 节流过期时间 int
 * @returns {*}
 */
export default function (fn, overtime) {
	var __present = true;

	return function () {
		//已经过期的才可以执行
		if (__present) {
			fn.apply(null, arguments);
			__present = false;
			//立即计时
			setTimeout(function () {
				__present = true;
			}, overtime || 0)
		}
	}
}