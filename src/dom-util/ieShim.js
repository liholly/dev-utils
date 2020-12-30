/**
 * 做一些ie兼容性的垫片
 *  1.添加class系列方法
 *  2.修复IE9下oninput事件(原生，jq) https://blog.csdn.net/u013328563/article/details/48530445
 *
 */
import isIE from './isIE.js'
export default function () {
	if (!isIE()) return;
	var isClsList = 'classList' in HTMLElement.prototype;
	if (!isClsList) {
		Object.defineProperty(HTMLElement.prototype, 'classList', {
			get: function () {
				var _self = this;
				return {
					add: function (cls) {
						if (!this.contains(cls)) {
							_self.className += (_self.className ? ' ' : '') + cls;
						}
					},
					remove: function (cls) {
						if (this.contains(cls)) {
							var reg = new RegExp(cls);
							_self.className = _self.className.replace(reg, '');
						}
					},
					contains: function (cls) {
						var _className = (_self.className || '').split('');
						return cls ? _className.indexOf(cls) !== -1 : false;
					},
					toggle: function (cls) {
						if (this.contains(cls)) {
							this.remove(cls)
						} else {
							this.add(cls)
						}
					}
				}
			}
		})
	}
}