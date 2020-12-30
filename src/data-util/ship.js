import each from './each.js'
/**
 * 继续追加其他参数 则会追加到执行函数的形参 没有其他形参则直接追加each的value，key
 * @param ogg array|object
 * @returns {Function}
 */
export default function (ogg) {
	var ___arg = [], ___k_v = [];

	each(arguments, function (v, index) {
		if (index === 0) return true;
		if (v === 'key' || v === 'value') ___k_v.push(v);
		else ___arg.push(v);
	});

	return function (fn) {
		each(ogg, function (value, key) {
			//组装传递到当前执行函数的参数
			var _arg = [];
			each(___k_v, function (v) {
				_arg.push(v === 'key' ? key : value)
			});

			//如果有传递fn则调用fn，否则就直接执行value
			fn ? fn.apply(null, (_arg.length === 0 ? [value, key] : _arg).concat(___arg)) : value();
		})
	}
}