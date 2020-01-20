
export default function (event) {  //使用这个方法跨浏览器取得event对象
	return event ? event : window.event;
}