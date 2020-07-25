import each from './data-util/each.js';

/**
 * 装载工具
 * @param ogg    要装载的对象
 * @param target    装载的目标对象  选填，不填则直接装载到局部函数内部
 * @param pick    要装载的函数    选题，不填则全部装载
 */
export default function (ogg, target, pick) {
	each(pick || ogg, function (v, k) {
		var __v = pick ? ogg[v] : v;
		var __k = pick ? v : k;
		target[__k] = __v;
	})
}