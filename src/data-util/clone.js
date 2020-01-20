import isObject from './isObject.js'

export default function (obj) {
	return isObject(obj) ? Object.keys(obj) : [];
}