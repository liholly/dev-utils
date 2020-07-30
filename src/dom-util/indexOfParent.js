import getParent from './getParent.js'
/**
 * 元素在父元素内的下标值
 * @param el 元素
 * @returns {*}
 */
export default function (el) {
	var children = getParent(el).children;
	var index = -1;
	for (var i = 0; i < children.length; i++) {
		if (children[i] === el) {
			index = i;
			break;
		}
	}
	return index;
}