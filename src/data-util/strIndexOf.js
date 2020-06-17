import each from './each.js'

export default function (agg, str) {
	var res;

	each(agg, function (val, index) {
		if (val.indexOf(str) > -1) {
			res = index;
			return false;
		}
	});
	
	return res;
}