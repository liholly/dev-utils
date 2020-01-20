import setHtml from './Chain.js'
import appendTo from './appendTo.js'
import createEl from './createEl.js'

export default function (text) {
	var styleEl = createEl('style');
	setHtml(styleEl, text);
	appendTo(styleEl, getEl('head'))
}