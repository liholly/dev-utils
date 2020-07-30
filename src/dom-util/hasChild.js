/**
 * 坚持某个元素内是否具有某个子元素
 * @param el    子元素
 * @param wrapper    容器
 * @returns {*}
 */
export default function (wrapper, el) {
	if (wrapper === el) return true;

	var __has = false;

	while (el.parentNode) {
		el = el.parentNode;
		if (wrapper === el) {
			__has = true;
			break;
		}
	}

	return __has
}