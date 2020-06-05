export default function (str) {
	var arrEntities = {'nbsp': ' '};
	return str.replace(/&(nbsp);/ig, function (all, t) {
		return arrEntities[t]
	})
}