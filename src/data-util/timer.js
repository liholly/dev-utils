export default function (time, fn) {
	var c = setInterval(function () {
		if (time < 1000) clearInterval(c);
		else (time -= 1000, fn(time, c));
	}, 1000);
}