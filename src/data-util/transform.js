//区别于lodash 这个可以拼装字符串
import size from './size.js'
import each from './each.js'

export default function (agg, fn, res) {
	if (size(agg)) each(agg, function (val, key, index) {
		var _is = fn.apply(null, val, key, res, index);
		return _is !== 'undefined' ? _is : true
	});
	return res
}