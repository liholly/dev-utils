export default function (el, attach) {
	var _k, _i;
	for (_k in attach) {
		if (_k === 'style' && typeof attach[_k] === 'object') for (_i in attach[_k]) el.style[_k] = attach[_k][_i];
		else el.setAttribute(_k, attach[_k]);
	}
	return el
}