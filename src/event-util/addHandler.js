import getTarget from './getTarget.js'
import getEl from './../dom-util/getEl.js'
import getElAll from './../dom-util/getElAll.js'
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
			//一次循环都没有的 直接就可以获取到目标的 说明在目标外层了 不算
			if (!getEl(target, __sltor)) {
				//目标和事件触发元素一致的情况也去掉
				if (target !== element) {
					function include(children, el) {
						var _include = false;

						for (var i = 0; i < children.length; i++) {
							if (children[i] === el) {
								_include = true;
								break;
							}
						}

						return _include
					}

					mapParents(target, function (ele) {
						//查询已经到达绑定的最外层，则停止
						if (__wrapper === ele) return false;

						//如果当前被点击的目标在代理元素内(从其父元素使用选择器查找目标，如果能查找到，并且当前元素也在查找到的元素集合之内，则认为是被代理的元素)，则执行
						var _p = getParent(ele);
						var _children = _p && getElAll(_p, __sltor);
						if (_children && include(_children, ele)) {
							execute = true;
							t = ele;
							return false
						}
					})
				}
			}
		}

		//根据是否有代理的情况来决定是否执行
		if (__sltor ? execute : true) stop = __handler.call(this, e, t || target);

		//如果事件函数有返回false，则禁止事件默认行为
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