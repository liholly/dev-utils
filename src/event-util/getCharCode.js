
export default function (event) {
	//以跨浏览器取得相同的字符编码，需在keypress事件中使用
	if (typeof event.charCode == "number") {
		return event.charCode;
	} else {
		return event.keyCode;
	}
}