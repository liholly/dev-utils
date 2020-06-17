/**
 * 将空格转义符转回正常的空格
 * @param str
 */
export default function (str) {
	var arrEntities = {'nbsp': ' '};
	return str.replace(/&(nbsp);/ig, function (all, t) {
		return arrEntities[t]
	})
}