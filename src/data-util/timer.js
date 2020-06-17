export default function (time, tickFn, step) {
	var _step = typeof step !== 'undefined' ? step : 1000;
	var c = setInterval(function () {
		if (time < _step) clearInterval(c);
		tickFn(time, c);
		time -= _step;
	}, _step);

	return c;
}