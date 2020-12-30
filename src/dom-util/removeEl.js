export default function (el) {
	return el ? (el.remove ? el.remove() : el && el.parentNode && el.parentNode.removeChild(el)) : null;
}