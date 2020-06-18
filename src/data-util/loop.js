export default function (timeout, tickFn, stepTime) {
	var interval, timeNum = 0, step = stepTime || 200, ctx, hasStop = false;

	function stop(c) {
		hasStop = true;
		ctx = c
	}

	interval = setInterval(function () {
		tickFn(stop);
		if (hasStop || (timeNum > timeout)) clearInterval(interval);
		else timeNum += step;
	}, step);
}