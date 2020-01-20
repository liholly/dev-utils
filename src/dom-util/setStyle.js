export default function (el, style) {
	for (var _k in style) {
		el.style[_k] = style[_k]
	}

	return el;
}