import each from './each.js'
import isEmpty from './isEmpty.js'

/**
 * 检查属性是否值都是真
 * @param obj	被检查的对象
 * @param keys	被检查的属性
 * @returns {boolean}
 */
export default function (obj, keys) {
	var affirm = true;

	function empty(item) {
		return (typeof item === 'object') ? isEmpty(item) : (item === 0 ? false : !item)
	}

	each(keys || obj, function (val) {
		if (keys ? empty(obj[val]) : empty(val)) {
			affirm = false;
			return false;
		}
	});

	return affirm
}