import filter from './filter.js'
import isArray from './isArray.js'
import isEmpty from './isEmpty.js'

export default function (agg, target) {
	if (isEmpty(agg) || isEmpty(target) || typeof agg !== 'object') return null;
	var res = filter(agg, target, 1);
	return res ? (isArray(res) ? res[0] : res) : null;
}