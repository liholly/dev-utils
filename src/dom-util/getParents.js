/**
 * 获取元素的所有父节点
 * append(getEl('body'),createEl('div',{class:'mimi'},'456789',[createEl('div',{class:'mama'},789)]))
 * @param el
 * @param slt
 * @returns {Array}
 */
export default function (el, slt) {
	var res = [];

	while (el.parentNode !== null) {
		el = el.parentNode;
		res.push(el);
	}

	return slt ? el.querySelectorAll(slt) : res;
}