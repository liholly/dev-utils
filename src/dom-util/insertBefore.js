/**
 *
 * https://blog.csdn.net/csdnlinyongsheng/article/details/99960935
 * @param el
 * @param son
 * @param inner
 * @returns {*}
 */
export default function (el, son, inner) {
	var _children = el.children[0];
	var _el = inner ? _children : el;
	if (!_children) el.appendChild(son);
	else _el.parentNode.insertBefore(son, _el);
	return el;
}