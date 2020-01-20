import appendTo from './appendTo.js'
import getEl from './getEl.js'
import createEl from './createEl.js'

export default function (el, fn) {
	var temp = createEl('div');
	temp.style.display = 'none';
	appendTo(el, temp);
	appendTo(temp, getEl('body'));
	fn();
	temp.remove();
}