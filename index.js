import data from './src/data-util/index.js';
import dom from './src/dom-util/index.js';
import event from './src/event-util/index.js';

data.each(data, function (fn, key) {
	window[key] = fn;
});

data.each(dom, function (fn, key) {
	window[key] = fn;
});

data.each(event, function (fn, key) {
	window[key] = fn;
});