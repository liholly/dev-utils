export default function (str) {
	return str ? str.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function (m) {
		return {
			'&lt;': '<',
			'&amp;': '&',
			'&quot;': '"',
			'&gt;': '>',
			'&#39;': "'",
			'&nbsp;': ' '
		}[m]
	}) : '';
}