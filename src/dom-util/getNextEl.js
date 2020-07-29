/**
 * 获取元素的下一个兄弟节点
 * 通过nextSibling或者 previousSibling所获得的HTML标签元素对象的属性问题
 * 一般先通过nextSibling.nodeName来获知其标签名，或者通过nextSibling.nodeType来获知其标签类型，
 * 然后，如果该nextSibling.nodeName = #text，则通过nextSibling.nodeValue来获知其文本值；
 * 否则，可以通过nextSibling.innerHTML等其他常用标签元素属性来获取其属性。
 * @param el
 * @returns {*|Node}
 */
export default function(el){
	return el.nextSibling
}