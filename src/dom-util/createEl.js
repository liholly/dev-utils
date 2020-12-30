import setAttrs from './setAttrs.js'
import setHtml from './setHtml.js'
import removeEl from './removeEl.js'

/**
 * 创建html元素实例万能方法
 *  也就是说，除第一个参数是必须的，还可以传入三个附加参数，只要保持参数的类型，参数次序随意。
 *    object    表示附加到元素上的属性 style属性支持两种格式：字符串|对象
 *    array    表示子元素
 *    string    表示元素内文本
 *  测试
 *  appendTo(createEl('<div id="lihong"></div>',{class:'active'},[createEl('button','test'),createEl('button','test')],'666666'),getEl('body'))
 * @param tagName 标签名|html
 * @returns {Element}
 */
export default function (tagName) {
	//处理tagName 创建el
	var _i, _k;
	var _isTag = !tagName.match(/</);
	var __el__ = document.createElement(_isTag ? tagName : 'div');
	var _el = _isTag ? __el__ : (setHtml(__el__, tagName).children || [])[0];
	if (!_isTag) removeEl(__el__);

	//附加项
	var _temp, _props, _children, _text;
	for (_i = 0; _i < arguments.length; _i++) {
		if (_i === 0) continue;
		_temp = arguments[_i];
		if (typeof _temp === 'object') {
			if ('length' in _temp) _children = _temp;
			else _props = _temp;
		}
		else _text = _temp;
	}

	if (_text) _el.innerText = _text;
	if (_props) setAttrs(_el, _props);
	if (_children) for (_k = 0; _k < _children.length; _k++) _el.appendChild(_children[_k]);

	return _el;
}