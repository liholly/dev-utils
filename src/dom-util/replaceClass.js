export default function (el, a, b) {
	if (!el) return;
	if (!a || !b) return el;
	el.classList.add(b);
	el.classList.remove(a);
	return el;
}