import transform from './each.js'

export default function (obj, lut) {
	return transform(obj, function (res, val, key) {
		res[lut[key]] = val
	}, {})
}