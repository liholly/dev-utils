/**
 * 获取元素的所有兄弟节点
 * @param el
 * @returns {*|Node}
 */
export default function (el) {
	var a = [];
	var p = el.parentNode.children;
	for (var i = 0, pl = p.length; i < pl; i++) {
		if (p[i] !== el) a.push(p[i]);
	}
	return a;
}