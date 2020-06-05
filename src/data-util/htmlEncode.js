export default function (str, reg) {
	return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function (a, b) {
		if (b) {
			return a;
		} else {
			return {
				'<': '&lt;',
				'&': '&amp;',
				'"': '&quot;',
				'>': '&gt;',
				"'": '&#39;'
			}[a]
		}

	}) : '';
}