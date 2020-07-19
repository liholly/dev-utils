import setAttr from './setAttr.js'
import setHtml from './setHtml.js'

/**
 * 创建html元素实例
 * @param tagName 标签名|html
 * @param attach
 * @returns {Element}
 */
export default function (tagName, attach) {
	var _isTag = tagName.length > 10 || (!!tagName.match(/</));
	var __el__ = document.createElement(_isTag ? 'div' : tagName);
	var _el;

	//根据传入的tagName类型决定 删除外容器，子元素被引用所以不会被删
	if (_isTag) {
		setHtml(__el__, tagName);
		_el = (__el__.children || [])[0];
		__el__.remove();
	}
	else _el = __el__;

	//设置属性
	var _k, _i;
	if (attach) {
		if (typeof attach === 'string') setHtml(_el, attach);
		else for (_k in attach) {
			if (_k === 'style') for (_i in attach[_k]) _el.style[_k] = attach[_k][_i];
			else setAttr(_el, attach[_k]);
		}
	}
	return _el;
}