export default function (el, inner) {
	return inner ? el.clientHeight : el.offsetHeight
}