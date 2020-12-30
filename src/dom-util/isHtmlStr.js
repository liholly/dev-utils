/**
 * 查询当前字符串是否是一个html字符串
 * @param str 字符串
 * @returns {boolean}
 */
export default function (str) {
	if (typeof str !== 'string' && typeof str !== 'number') return false;
	var _html = String(str);
	return _html[0] === '<' && _html[_html.length - 1] === '>'
}