export default function (el, className) {
	if ((typeof el === 'object') && ('length' in el)) el.forEach(function (item) {
		item.classList.add(className)
	});
	else el.classList.add(className);
	return el;
}