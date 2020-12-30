import data from './data-util/index.js';
import dom from './dom-util/index.js';
import event from './event-util/index.js';
import bus from './bus-util/index.js';
import setup from './setup.js';

//以下是测试环境用的正式生产时去掉
// data.each(data, function (fn, key) {
// 	window[key] = fn;
// });
//
// data.each(dom, function (fn, key) {
// 	window[key] = fn;
// });
//
// data.each(event, function (fn, key) {
// 	window[key] = fn;
// });
//
// window[bus] = bus;

export default {
	data,
	dom,
	event,
	bus,
	setup
};