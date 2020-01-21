(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	function isArray (arr) {
		return arr && typeof arr === 'object' && arr.length >= 0
	}

	function isFunction (fn) {
		return fn && typeof fn === 'function';
	}

	function isObject (obj) {
		return obj && typeof obj === 'object' && !obj.length;
	}

	function each (agg, fn) {
		var _fn = true;
		if (!agg || !isFunction(fn)) return;

		if (isArray(agg)) {
			for (var i = 0; i < agg.length; i++) {
				_fn = fn(agg[i], i);
				if (_fn !== undefined && _fn === false) break;
			}
		}

		if (isObject(agg)) {
			var index = 0;
			for (var k in agg) {
				_fn = fn(agg[k], k, index++);
				if (_fn !== undefined && _fn === false) break;
			}
		}
	}

	function isString (str) {
		return str && typeof str === 'string';
	}

	function split (str, s) {
		if (!str || !isString(str)) return [];
		return str.split(s)
	}

	function indexOf (agg, target) {
		var res = -1;

		if (agg !== 'undefined' && target !== 'undefined') {
			if (isFunction(target)) each(agg, function (val, index) {
				res = index;
				if (target(val, index)) return false;
			});
			else res = agg.indexOf(target);
		}

		return res;
	}

	function camelCase (str) {
		var strIn;
		each(['-', '_', '~', '@', '+'], function (spt) {
			if (indexOf(str, spt) > -1) {
				strIn = split(str, spt);
				return false
			}
		});

		var strOut = '';
		each(strIn, function (val, index) {
			strOut += (index !== 0 ? val.replace(val[0], val[0].toUpperCase()) : val);
		});

		return strOut
	}

	function get (target, path) {
		if (!target || !path) return target;
		var _t = target,
			_p = String(path).split('.');

		for (var i = 0; i < _p.length; i++) {
			_t = _t[_p[i]];
			if (!_t) break;
		}

		return _t;
	}

	function pick (obj, arr, reject) {
		var o = {};

		if (reject) each(obj, function (val, key) {
			if (arr.indexOf(key) < 0) o[key] = val;
		});
		else each(arr, function (val) {
			o[val] = obj[val];
		});

		return o;
	}

	function keys(obj) {
		return typeof obj === 'object' ? Object.keys(obj) : [];
	}

	function size (agg) {
		return agg ? (isObject(agg) ? keys(agg).length : agg.length) : 0;
	}

	function transform (agg, fn, res) {
		if (size(agg)) each(agg, function (val, key, index) {
			var _is = fn.call(null, val, key, res, index);
			return _is !== 'undefined' ? _is : true
		});
		return res
	}

	//注意务必传入可枚举的对象

	function equal (agg1, agg2) {
		var res = true;
		if (typeof agg1 !== typeof agg2) return false;
		if (isObject(agg1) || isArray(agg1)) {
			if (size(keys(agg1)) !== size(keys(agg2))) return false;
			else each(agg1, function (val, key) {
				if (val !== agg2[key]) {
					res = false;
					return false;
				}
			});
		}
		else res = (agg1 === agg2);

		return res
	}

	//区别于lodash 这个可以查找对象并把符合条件的键值组成新对象返回

	function filter (agg, target, limit) {
		var index = 0;
		return transform(agg, function (item, key, res) {
			if (limit === index) return false;
			var has;
			if (isFunction(target)) has = target(item, key);
			else if (isArray(target) && target[0] === key) has = item === target[1];
			else has = equal(target[key], item);

			if (has) {
				if (isArray(res)) res.push(item);
				else res[key] = item;

				index++;
			}
		}, isArray(agg) ? [] : {})
	}

	function pickBy (obj, target) {
		return filter(obj, target)
	}

	function findKey (agg, target) {
		return isObject(agg) ? keys(filter(agg, target, 1))[0] : null
	}

	function find (agg, target) {
		return filter(agg, target, 1)
	}

	//区别于lodash 这个传入函数当作条件

	function includes (arr, target) {
		var __has = false;

		each(arr, function (val) {
			if (isFunction(target) && target(val)) __has = true;
			else if (target === val) __has = true;

			if (__has) return false;
		});

		return __has;
	}

	function compact (arr) {
		var __arr = [];

		each(arr, function (val) {
			if (!!val) __arr.push(val);
		});

		return __arr;
	}

	function uniq (arr) {
		var __arr = [];

		each(arr, function (val) {
			if (!includes(__arr, val)) __arr.push(val);
		});

		return __arr;
	}

	function extend (a, b) {
		each(b, function (val, key) {
			a[key] = val;
		});

		return a;
	}

	function keysBy (obj, target) {
		return keys(filter(obj, target));
	}

	function timer (time, fn, step) {
		var _step = typeof step !== 'undefined' ? step : 1000;
		var c = setInterval(function () {
			if (time < _step) clearInterval(c);
			else (time -= _step, fn(time, c));
		}, _step);
		
		return c;
	}

	function clone (obj) {
		return isObject(obj) ? Object.keys(obj) : [];
	}

	var data = {
		keys,
		keysBy,
		filter,
		find,
		findKey,
		indexOf,
		extend,
		split,
		get,
		pick,
		pickBy,
		size,
		each,
		isFunction,
		isString,
		isObject,
		isArray,
		compact,
		uniq,
		includes,
		camelCase,
		equal,
		transform,
		timer,
		clone
	};

	function setAttr (el, attrName, value) {
		el.setAttribute(attrName, value);
		return el
	}

	function setHtml (el, html) {
		el.innerHTML = html;
		return el
	}

	function createEl (tagName, attach) {
		var _el = document.createElement(tagName);
		var _k;
		if (attach) {
			if (typeof attach === 'string') setHtml(_el, attach);
			else for (_k in attach) {
				if (_k === 'style') _el.style[_k] = attach.style[_k];
				else setAttr(_el, attach[k]);
			}
		}
		return _el;
	}

	function cloneEl (el, deep) {
		return el.cloneNode(!!deep);
	}

	function removeEl (el) {
		return el.remove();
	}

	function appendTo (el, wrap) {
		wrap.appendChild(el);
		return el;
	}

	function getEl (el, slt) {
		var __slt = slt ? slt : el;
		var __el = slt ? el : document;
		return __el.querySelector(__slt)
	}

	function tempAppend (el, fn) {
		var temp = createEl('div');
		temp.style.display = 'none';
		appendTo(el, temp);
		appendTo(temp, getEl('body'));
		fn();
		temp.remove();
	}

	function setHtmlOuter (el, html) {
		el.outerHTML = html;
		return el
	}

	function setCss (text) {
		var styleEl = createEl('style');
		setHtml(styleEl, text);
		appendTo(styleEl, getEl('head'));
	}

	function addClass (el, className) {
		el.classList.add(className);
		return el;
	}

	function setStyle (el, style) {
		for (var _k in style) {
			el.style[_k] = style[_k];
		}

		return el;
	}

	function removeAttr (el, attrName) {
		el.removeAttribute(attrName);
		return el;
	}

	function removeClass (el, className) {
		el.classList.remove(className);
		return el;
	}

	function getElAll (el, slt) {
		var __slt = slt ? slt : el;
		var __el = slt ? el : document;
		return __el.querySelectorAll(__slt)
	}

	function getHtml (el) {
		return el.innerHTML
	}

	function getHtmlOuter (el) {
		return el.outerHTML
	}

	function getChildren (el) {
		return el.children
	}

	function getAttr (el, attrName) {
		return el.getAttribute(attrName)
	}

	//增删改

	var dom = {
		createEl,
		cloneEl,
		removeEl,
		appendTo,
		tempAppend,
		setHtmlOuter,
		setAttr,
		setStyle,
		setCss,
		addClass,
		removeAttr,
		removeClass,
		getEl,
		getElAll,
		getHtml,
		getHtmlOuter,
		getChildren,
		getAttr,
		setHtml
	};

	function addHandler(element, type, handler) { //添加事件
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);  //使用DOM2级方法添加事件
		} else if (element.attachEvent) {                    //使用IE方法添加事件
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;          //使用DOM0级方法添加事件
		}
	}

	function removeHandler (element, type, handler) {  //取消事件
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}

	function getEvent (event) {  //使用这个方法跨浏览器取得event对象
		return event ? event : window.event;
	}

	function getTarget (event) {  //返回事件的实际目标
		return event.target || event.srcElement;
	}

	function preventDefault (event) {   //阻止事件的默认行为
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

	function stopPropagation(event) {
		//立即停止事件在DOM中的传播
		//避免触发注册在document.body上面的事件处理程序
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}

	function getRelatedTarget (event) {
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

	function getButton (event) {
		//获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
		if (document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch (event.button) {
				//将IE模型下的button属性映射为DOM模型下的button属性
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;  //按下的是鼠标主按钮（一般是左键）
				case 2:
				case 6:
					return 2;  //按下的是中间的鼠标按钮
				case 4:
					return 1;  //鼠标次按钮（一般是右键）
			}
		}
	}

	function getWheelDelta (event) {
		//获取表示鼠标滚轮滚动方向的数值
		if (event.wheelDelta) {
			return event.wheelDelta;
		} else {
			return -event.detail * 40;
		}
	}

	function getCharCode (event) {
		//以跨浏览器取得相同的字符编码，需在keypress事件中使用
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}

	var event = {
		addHandler,
		removeHandler,
		getEvent,
		getTarget,
		preventDefault,
		stopPropagation,
		getRelatedTarget,
		getButton,
		getWheelDelta,
		getCharCode
	};

	data.each(data, function (fn, key) {
		window[key] = fn;
	});

	data.each(dom, function (fn, key) {
		window[key] = fn;
	});

	data.each(event, function (fn, key) {
		window[key] = fn;
	});

}));
