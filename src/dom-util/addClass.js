import _handleClass from './_handleClass.js';

/**
 * 添加样式类名称
 * 注意做兼容，当前只兼容到ie10
 * 要更好兼容要用ele.className的方式
 * @param el
 * @param className
 * @returns {*}
 */
export default function (el, className) {
	return _handleClass(el, className, 'add');
}