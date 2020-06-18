import each from './each.js'

export default function (obj, keys) {
	var affirm = true;

	function empty(item) {
		return (typeof item === 'object') ? _.isEmpty(item) : (item === 0 ? false : !item)
	}

	each(keys || obj, function (val) {
		if (keys ? empty(obj[val]) : empty(val)) {
			affirm = false;
			return false;
		}
	});

	return affirm
}