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
	var _el = document.createElement(_isTag ? 'div' : tagName);

	//根据传入的tagName类型决定
	if (_isTag) {
		setHtml(_el, tagName);
		_el = (_el.children || [])[0];
	}

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