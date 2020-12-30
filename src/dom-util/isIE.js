export default function () {
	return ("ActiveXObject" in window) || !!document.all;
}