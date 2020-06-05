export default function (str) {
	str = str.replace(/(\s|&nbsp;)+/g, ' ');
	return str;
}