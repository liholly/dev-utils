import mapParents from './mapParents.js'
import getParent from './getParent.js'
import getEl from './getEl.js'

/**
 * 获取元素的所有父节点
 * append(getEl('body'),createEl('div',{class:'mimi'},'456789',[createEl('div',{class:'mama'},789)]))
 * @param el    目标元素
 * @param slt    指定选择器的父节点
 * @returns {Array}
 */
export default function (el, slt) {
	var res = [];

	mapParents(el, function (p) {
		if (slt) {
			var _p = getParent(p);
			if (_p && getEl(_p, slt)) {
				res.push(p);
				return false
			}
		}
		else res.push(p);
	});

	return res;
}