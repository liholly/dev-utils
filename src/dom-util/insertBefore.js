/**
 * 插入元素到目标元素前面
 * https://blog.csdn.net/csdnlinyongsheng/article/details/99960935
 * 测试 aa = createEl('div','123456');append(getEl('body'),aa);insertBefore(aa,createEl('div','789'),true);
 * @param el
 * @param son
 * @param inner
 * @returns {*}
 */
export default function (el, son, inner) {
	var _children = el.firstChild;
	var _el = inner ? _children : el;
	if (!_children) el.appendChild(son);
	else _el.parentNode.insertBefore(son, _el);
	return el;
}