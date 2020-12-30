var events = window['__UTIL_BUS__'] = window['__UTIL_BUS__'] || {};

function getEvent(name) {
	return events[name] = events[name] || []
}

function _on(type, target, fn, once) {
	if (!fn) return 'Bus event function is none!';
	fn.$target = target;
	fn.$once = !!once;
	getEvent(type).push(fn)
}

function on(type, fn) {
	_on(type, false, fn)
}

function once(type, fn) {
	_on(type, false, fn, true)
}

function emit(type, n) {
	var evs = events[type] || [];
	for (var index = evs.length - 1; index > -1; index--) {
		var e = evs[index];
		var $t = e.$target;
		if ($t ? (typeof $t === 'function' ? $t(n) : $t === n) : true) {
			e(n);
			if (e.$once) evs.splice(index, 1)
		}
	}
}

export default {
	on,
	once,
	emit,
	events,
	_on
}