//chain().createEl('div').setAttr('id','HelloWorld').setHtml('Hello World!').appendTo(getEl('body')).end()
import {
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
} from './index.js'

export default function (el) {
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