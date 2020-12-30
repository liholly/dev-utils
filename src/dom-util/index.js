//增删改
import createEl from './createEl.js'
import cloneEl from './cloneEl.js'
import removeEl from './removeEl.js'
import appendTo from './appendTo.js'
import tempAppend from './tempAppend.js'
import setHtmlOuter from './setHtmlOuter.js'
import setHtml from './setHtml.js'
import setAttr from './setAttr.js'
import setCss from './setCss.js'
import addClass from './addClass.js'
import setStyle from './setStyle.js'
import removeAttr from './removeAttr.js'
import removeClass from './removeClass.js'
import append from './append.js'
import insertBefore from './insertBefore.js'
import insertAfter from './insertAfter.js'
import setAttrs from './setAttrs.js'
import hasClass from './hasClass.js'
import indexOf from './indexOf.js'
import indexOfParent from './indexOfParent.js'
import replaceClass from './replaceClass.js'
import toggleClass from './toggleClass.js'

//查
import getEl from './getEl.js'
import getElAll from './getElAll.js'
import getHtml from './getHtml.js'
import getHtmlOuter from './getHtmlOuter.js'
import getChildren from './getChildren.js'
import getAttr from './getAttr.js'
import getWidth from './getWidth.js'
import getHeight from './getHeight.js'
import getParent from './getParent.js'
import getParents from './getParents.js'
import getNextEl from './getNextEl.js'
import getPrevEl from './getPrevEl.js'
import getSiblings from './getSiblings.js'
import mapParents from './mapParents.js'
import ieShim from './ieShim.js'
import isIE from './isIE.js'
import isHtmlStr from './isHtmlStr.js'

ieShim();

export default {
	createEl,
	cloneEl,
	removeEl,
	appendTo,
	tempAppend,
	setHtmlOuter,
	setAttr,
	setStyle,
	setCss,
	addClass,
	removeAttr,
	removeClass,
	replaceClass,
	toggleClass,
	getEl,
	getElAll,
	getHtml,
	getHtmlOuter,
	getParent,
	getParents,
	getNextEl,
	getPrevEl,
	getSiblings,
	getChildren,
	getAttr,
	setHtml,
	append,
	insertBefore,
	insertAfter,
	setAttrs,
	getWidth,
	getHeight,
	hasClass,
	indexOf,
	indexOfParent,
	mapParents,
	isIE,
	isHtmlStr
}