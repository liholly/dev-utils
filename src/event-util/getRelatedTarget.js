export default function (event) {
	//获取mouseover和mouseout相关元素
	if (event.relatedTarget) {
		return event.relatedTarget;
	} else if (event.toElement) {      //兼容IE8-
		return event.toElement;
	} else if (event.formElement) {
		return event.formElement;
	} else {
		return null;
	}
}