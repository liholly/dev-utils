/**
 * 获取元素的内外高px
 * @param el	元素
 * @param inner	是否为内尺寸
 * @returns {number}
 */
export default function (el, inner) {
	return inner ? el.clientHeight : el.offsetHeight
}