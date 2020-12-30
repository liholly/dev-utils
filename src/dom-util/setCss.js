import setHtml from './setHtml.js'
import append from './append.js'
import createEl from './createEl.js'
import getEl from './getEl.js'

export default function (text) {
	var styleEl = createEl('style');
	setHtml(styleEl, text);
	append(getEl('head'), styleEl)
}