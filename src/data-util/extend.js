import each from './each.js'

export default function (a, b) {
	b && each(b, function (val, key) {
		a[key] = val
	});

	return a;
}