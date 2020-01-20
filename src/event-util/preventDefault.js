
export default function (event) {   //阻止事件的默认行为
	if (event.preventDefault) {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
}