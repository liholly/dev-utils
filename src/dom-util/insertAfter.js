export default function (el, son, inner) {
	var _children = el.children[0];
	var _el = inner ? _children : el;
	if (!_children) el.appendChild(son);
	else _el.parentNode.insertBefore(son, _el);
	return el;
}