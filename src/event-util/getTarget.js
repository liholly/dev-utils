
export default function (event) {  //返回事件的实际目标
	return event.target || event.srcElement;
}