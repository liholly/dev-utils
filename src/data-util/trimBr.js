export default function (str) {
	str = str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "\r\n\r\n");//限制最多2次换行
	str = str.replace(/^((\s|&nbsp;)*\r?\n)+/g, '');//清除开头换行
	str = str.replace(/((\s|&nbsp;)*\r?\n)+$/g, '');//清除结尾换行
	return str;
}