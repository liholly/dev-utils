import transform from './transform.js'
import split from './split.js'
import size from './size.js'

export default function (str) {
	var a = split(str, '-');
	var _arr = size(a) ? a : split(str, '_');
	return transform(_arr, function (val, index, res) {
		res += (index !== 0 ? val.splice(index, 1, val[0].toUpperCase()) : val)
	}, '')
}