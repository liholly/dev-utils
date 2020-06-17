/**
 * html字符实体的所有换行符转为html标签
 * @param str
 */
export default function (str) {
	return str.replace(/\r?\n/g, "<br />");
}