/**
 * 判断实体是否为空
 * @param ogg object|array|number|string
 * @returns {boolean}
 */
export default function (ogg) {
	if (!ogg) return true;
	if (typeof ogg === 'object') return Object.keys(ogg).length === 0;
	else return typeof ogg === 'string' ? ogg.length === 0 : ogg === 0;
}