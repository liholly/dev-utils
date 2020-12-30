import each from './each.js'

export default function (agg, fn, res) {
	each(agg, function (val, key, index) {
		var _is = fn.call(null, res, val, key, index);
		return _is !== 'undefined' ? _is : true
	});
	return res
}