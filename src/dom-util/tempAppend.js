import append from './append.js'
import getEl from './getEl.js'
import createEl from './createEl.js'

/**
 * 临时生成一个元素实例，用于计算某些属性值
 * @param el 需要被计算的元素
 * @param fn 需要处理的事务
 */
export default function (el, fn) {
	var temp = createEl('div');
	temp.style.display = 'none';//这个要考虑使用visible 用none即是未渲染到dom，可能还是无法计算某些值
	append(temp, el);
	append(getEl('body'), temp);
	fn(el);
	temp.remove();
}