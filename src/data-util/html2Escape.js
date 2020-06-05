export default function (sHtml) {
	return sHtml.replace(/[<>&"]/g, function (c) {
		return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
	});
}