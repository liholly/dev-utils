//区别于lodash 这个可以查找对象并把符合条件的键值组成新对象返回
import isFunction from './isFunction.js'
import isArray from './isArray.js'
import each from './each.js'
import isEmpty from './isEmpty.js'

/**
 * 筛选结果
 * utils.data.filter([{a:{b:1},c:{}},{a:{b:2},c:[]}],function(item){return item.a.b===1});
 * utils.data.filter([{a:1,c:{}},{a:{b:2},c:[]}],{a:1});
 * utils.data.filter([{a:1,c:{}},{a:{b:2},c:[]}],['a',1]);
 * @param agg    对象或数组
 * @param target    搜选的条件
 * @param limit    长度限制，也就是最多可以查找多少个结果
 */
export default function (agg, target, limit) {
	if (isEmpty(agg) || isEmpty(target) || typeof agg !== 'object') return agg;
	var index = 0;
	var resIsArr = isArray(agg);
	var res = resIsArr ? [] : {};

	each(agg, function (item, key) {
		if (limit === index) return false;
		var has = false;

		//function
		if (isFunction(target)) has = target(item, key);

		//array
		else if (isArray(target)) has = target[1] === item[target[0]];

		//object
		else {
			has = true;
			each(target, function (v, k) {
				if (item[k] !== v) {
					has = false;
					return false;
				}
			})
		}

		//区分object/array
		if (has) {
			if (resIsArr) res.push(item);
			else res[key] = item;

			index++;
		}
	});

	return res
}