export default function (tickFn, stepTime) {
	var interval, step = stepTime || 200;

	function stop() {
		clearInterval(interval);
	}

	interval = setInterval(function () {
		tickFn(stop)
	}, step);

	return interval
}