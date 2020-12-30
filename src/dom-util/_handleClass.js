/**
 * 处理calss属性
 * 测试
 * dom = utils.dom;
 * aaa = dom.getEl('body');
 * dom.addClass(aaa,'bbbb');
 * dom.addClass(aaa,'cccc dddd ffff');
 * dom.removeClass(aaa,'bbbb   cccc');
 * dom.replaceClass(aaa,'dddd','bbbb');
 *
 * @param el 被处理的元素
 * @param className 单个|空格多个|array
 * @param type add|remove
 * @returns {*}
 */
export default function (el, className, type) {
	if (!el) return;
	if (!className) return el;

	if (typeof className === 'string' && className.indexOf(' ') > -1) {
		className = className.split(' ');
	}

	function handle(elm) {
		if (typeof className === 'string') {
			elm.classList[type](className);
		}
		else {
			var i, n;
			for (i = 0; i < className.length; i++) {
				n = (className[i] || '').replace(' ', '');
				if (n) elm.classList[type](n);
			}
		}
	}

	((typeof el === 'object') && ('length' in el)) ? el.forEach(handle) : handle(el);

	return el;
}