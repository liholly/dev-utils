/**
 * 删除html中的HTML标签
 * @param tab html字符实体
 */
export default function (tab) {
	return tab.replace(/<[^<>]+?>/g, '');
}