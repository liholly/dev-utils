export default function(element, type, handler) { //添加事件
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);  //使用DOM2级方法添加事件
	} else if (element.attachEvent) {                    //使用IE方法添加事件
		element.attachEvent("on" + type, handler);
	} else {
		element["on" + type] = handler;          //使用DOM0级方法添加事件
	}
}