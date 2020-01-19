//增删改
export function createEl(tagName, attach) {
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

export function cloneEl(el, deep) {
	return el.cloneNode(!!deep);
}

export function removeEl(el) {
	return el.remove();
}

export function appendTo(el, wrap) {
	wrap.appendChild(el);
	return el;
}

export function tempAppend(el, fn) {
	var temp = createEl('div');
	temp.style.display = 'none';
	appendTo(el, temp);
	appendTo(temp, getEl('body'));
	fn();
	temp.remove();
}

export function setHtmlOuter(el, html) {
	el.outerHTML = html
	return el
}

export function setHtml(el, html) {
	el.innerHTML = html;
	return el
}

export function setAttr(el, attrName, value) {
	el.setAttribute(attrName, value);
	return el
}

export function setStyle(el, style) {
	for (var _k in style) {
		el.style[_k] = style[_k]
	}

	return el;
}

export function setCss(text) {
	var styleEl = createEl('style');
	setHtml(styleEl, text);
	appendTo(styleEl, getEl('head'))
}

export function addClass(el, className) {
	el.classList.add(className);
	return el;
}

export function removeAttr(el, attrName) {
	el.removeAttribute(attrName);
	return el;
}

export function removeClass(el, className) {
	el.classList.remove(className);
	return el;
}

//查
export function getEl(el, slt) {
	var __slt = slt ? slt : el;
	var __el = slt ? el : document;
	return __el.querySelector(__slt)
}

export function getElAll(el, slt) {
	var __slt = slt ? slt : el;
	var __el = slt ? el : document;
	return __el.querySelectorAll(__slt)
}

export function getHtml(el) {
	return el.innerHTML
}

export function getHtmlOuter(el) {
	return el.outerHTML
}

export function getChildren(el) {
	return el.children
}

export function getAttr(el, attrName) {
	return el.getAttribute(attrName)
}

//chain().createEl('div').setAttr('id','HelloWorld').setHtml('Hello World!').appendTo(getEl('body')).end()
export function Chain(el) {
	var __el = el || document;
	var __object = {
		end: function () {
			return __el
		}
	};
	var __chain = ['createEl', 'cloneEl', 'getEl', 'removeEl', 'appendTo', 'setHtmlOuter', 'setHtml', 'setAttr', 'setStyle', 'setCss', 'removeAttr', 'getEl', 'getElAll', 'getHtml', 'getHtmlOuter', 'getChildren', 'getAttr'];

	function getArgs(args, fnName) {
		var __args = (fnName === 'createEl' || fnName === 'setCss') ? [] : [__el];

		for (var i = 0; i < args.length; i++) {
			__args.push(args[i]);
		}

		return __args;
	}

	function getFn(fnName) {
		return function () {
			try {
				__el = eval(fnName).apply(null, getArgs(arguments, fnName));
			}
			catch (e) {
				//console.log(e);
			}

			return __object;
		}
	}

	for (var i = 0; i < __chain.length; i++) {
		var fnName = __chain[i];
		__object[fnName] = getFn(fnName);
	}

	return __object
}

export default {
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
	Chain,
}