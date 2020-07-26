var events = window['__util_bus'] = window['__util_bus'] || [];

function setEvent(name, callback) {
	events.push({name: name, callbacks: [callback]})
}

function getEvent(name) {
	return events.find(function (item) {
		return item.name === name
	})
}

function getCallbacks(name) {
	var event = getEvent(name);
	return event ? event.callbacks : null;
}

function on(type, fn) {
	var event = getCallbacks(type);
	if (event) event.push(fn);
	else setEvent(type, fn);
}

function emit(type, n) {
	var i, events = getCallbacks(type);
	if (events) {
		for (i = 0; i < events.length; i++) {
			events[i](n)
		}
	}
	else console.warn('Call "type" is empty!');
}

export default {
	on,
	emit
}