/**
 * 查询当前元素是否是一个空元素
 * @param el 元素
 * @returns {boolean}
 */
export default function (el) {
	if (!el) return true;
	return el.children ? (el.children || []).length === 0 : true
}