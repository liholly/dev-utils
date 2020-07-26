//区别于lodash 这个可以查找对象并把符合条件的键值组成新对象返回
import transform from './transform.js'
import isFunction from './isFunction.js'
import isArray from './isArray.js'
import equal from './equal.js'

/**
 * 筛选结果
 * Utils.data.filter([{a:{b:1},c:{}},{a:{b:2},c:[]}],function(item){return item.a.b===1})
 * @param agg    对象或数组
 * @param target    搜选的条件
 * @param limit    长度限制，也就是最多可以查找多少个结果
 */
export default function (agg, target, limit) {
	var index = 0;
	return transform(agg, function (item, key, res) {
		if (limit === index) return false;
		var has;
		if (isFunction(target)) has = target(item, key);
		else if (isArray(target) && target[0] === key) has = item === target[1];
		else has = equal(target[key], item);

		if (has) {
			if (isArray(res)) res.push(item);
			else res[key] = item;

			index++;
		}
	}, isArray(agg) ? [] : {})
}