import setAttr from './setAttr.js'
import setHtml from './setHtml.js'

export default function (tagName, attach) {
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