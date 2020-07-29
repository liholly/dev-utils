/**
 * 元素是否包含指定类
 * aaa = createEl('div','6666',{class:'lihong mimi'});append(getEl('body'),aaa);
 * @param el
 * @param className
 * @returns {number}
 */
export default function (el, className) {
	return (el.className || '').split(' ').indexOf(className) > -1;
}