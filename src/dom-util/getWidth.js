export default function (el, inner) {
	return inner ? el.clientWidth : el.offsetWidth
}