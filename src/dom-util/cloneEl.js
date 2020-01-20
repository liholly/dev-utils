export default function (el, deep) {
	return el.cloneNode(!!deep);
}