/**
 * 元素在指定集合内的下标值，比如getElAll获得的元素集合
 * @param el 元素
 * @param elLst 元素集合
 * @returns {*}
 */
export default function (el, elLst) {
	var index = -1;
	for (var i = 0; i < elLst.length; i++) {
		index = i;
		if (elLst[i] === el) break;
	}
	return index;
}