export default function (el, className) {
	if ((typeof el === 'object') && ('length' in el)) {
		el.forEach(function (item) {
			item.classList.remove(className)
		})
	}
	else el.classList.remove(className);
	return el;
}