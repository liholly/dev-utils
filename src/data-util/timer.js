export default function (time, tickFn, step) {
	var interval, _step = (typeof step !== 'undefined') ? step : 1000;

	function stop() {
		clearInterval(interval)
	}

	interval = setInterval(function () {
		if (time < _step) stop();
		tickFn(time, stop);
		time -= _step;
	}, _step);

	return interval;
}