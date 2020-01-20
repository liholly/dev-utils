
export default function(event) {
	//立即停止事件在DOM中的传播
	//避免触发注册在document.body上面的事件处理程序
	if (event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}
}