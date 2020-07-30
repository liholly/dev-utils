import getTarget from './getTarget.js'
import getEl from './../dom-util/getEl.js'
import getParent from './../dom-util/getParent.js'
import mapParents from './../dom-util/mapParents.js'

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
	var __wrapper = __sltor ? getParent(getEl(element, sltor)) : null;

	//事件委托
	function eventFn(e) {
		var stop = null;
		var target = getTarget(e);
		var execute = false;
		var t = null;

		if (__sltor) {
			mapParents(target, function (ele) {
				//已经查询已经到达绑定的最外层，则停止
				if (__wrapper === ele) return false;

				//如果当前被点击的目标在代理范围内，则执行
				var _p = getParent(ele);
				if (_p && getEl(_p, __sltor)) {
					execute = true;
					t = ele;
					return false
				}
			})
		}

		if (__sltor ? execute : true) stop = __handler.call(this, e, t || target);
		if (stop === false) return false;
	}

	if (element.addEventListener) {
		element.addEventListener(type, eventFn, false);  //使用DOM2级方法添加事件
	} else if (element.attachEvent) {                    //使用IE方法添加事件
		element.attachEvent("on" + type, eventFn);
	} else {
		element["on" + type] = eventFn;          //使用DOM0级方法添加事件
	}
}