export default function (el, style) {
	if (!el) return;
	if (!style) return el;
	for (var _k in style) {
		el.style[_k] = style[_k]
	}

	return el;
}