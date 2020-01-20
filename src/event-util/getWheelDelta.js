
export default function (event) {
	//获取表示鼠标滚轮滚动方向的数值
	if (event.wheelDelta) {
		return event.wheelDelta;
	} else {
		return -event.detail * 40;
	}
}