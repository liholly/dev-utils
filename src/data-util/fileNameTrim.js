/**
 * 修正文件名的一些特殊符号，用于配合windows的文件系统
 * @param str 字符串
 * @returns {string}
 */
export default function (str) {
	if (!str || !str.length) return "";
	var s = "";
	s = str.replace(/\//g, "-");
	s = s.replace(/\\/g, "-");
	s = s.replace(/:/g, "-");
	s = s.replace(/\*/g, "-");
	s = s.replace(/\?/g, "-");
	s = s.replace(/"/g, "-");
	s = s.replace(/>/g, "");
	s = s.replace(/</g, "");
	s = s.replace(/\|/g, "");
	return s;
}