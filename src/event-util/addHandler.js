import getTarget from './getTarget.js'

/**
 * 添加事件
 * @param element    事件元素
 * @param type    事件类型
 * @param sltor    代理选择器
 * @param handler    事件函数
 */
export default function (element, type, sltor, handler) {
	var __sltor = handler ? sltor : null;
	var __handler = handler || sltor;
	var __finish = false;

	//事件委托
	function eventFn(e) {
		if (__sltor) {
			var parent = getTarget(e).parentNode;
			if (!__finish && parent.querySelector(__sltor)) {
				__handler.call(this, e);
				__finish = true;
			}
		}
		else __handler.call(this, e);
	}

	if (element.addEventListener) {
		element.addEventListener(type, eventFn, false);  //使用DOM2级方法添加事件
	} else if (element.attachEvent) {                    //使用IE方法添加事件
		element.attachEvent("on" + type, eventFn);
	} else {
		element["on" + type] = eventFn;          //使用DOM0级方法添加事件
	}
}