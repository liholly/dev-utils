/**
 * 元素在父元素内的下标值
 * @param el 元素
 * @returns {*}
 */
export default function (el) {
	var children = el.parentNode.children;
	var index = -1;
	for (var i = 0; i < children.length; i++) {
		index = i;
		if (children[i] === el) break;
	}
	return index;
}