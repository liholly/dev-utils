export default function (el, slt) {
	var __slt = slt ? slt : el;
	var __el = slt ? el : document;
	return __el.querySelectorAll(__slt)
}