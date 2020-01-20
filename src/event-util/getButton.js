export default function (event) {
	//获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
	if (document.implementation.hasFeature("MouseEvents", "2.0")) {
		return event.button;
	} else {
		switch (event.button) {
			//将IE模型下的button属性映射为DOM模型下的button属性
			case 0:
			case 1:
			case 3:
			case 5:
			case 7:
				return 0;  //按下的是鼠标主按钮（一般是左键）
			case 2:
			case 6:
				return 2;  //按下的是中间的鼠标按钮
			case 4:
				return 1;  //鼠标次按钮（一般是右键）
		}
	}
}