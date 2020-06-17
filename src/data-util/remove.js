import isArray from './isArray.js'

export default function (agg, index) {
	var dx = agg[index];
	if (isArray(agg)) agg.splice(index, 1);
	else delete agg[index];
	return dx;
}