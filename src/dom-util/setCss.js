import setHtml from './setHtml.js'
import appendTo from './appendTo.js'
import createEl from './createEl.js'
import getEl from './getEl.js'

export default function (text) {
	var styleEl = createEl('style');
	setHtml(styleEl, text);
	appendTo(styleEl, getEl('head'))
}