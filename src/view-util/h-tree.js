export default function (htmlStr) {
	var html = '<h1 style="white-space: normal;" id="docstree0">激活盒型</h1><p style="white-space: normal;">在正式创建分类之前，需要先从系统分类中挑选您需要使用的盒型。</p><h1 style="white-space: normal;" id="docstree1">创建分类</h1><p style="white-space: normal;">选好盒型之后，就可以开始为您的站点创建盒型目录。<br></p><p style="white-space: normal;">点击您创建的目录（选中目录），可看到当前目录下的盒型，你可以点击右侧栏的盒型图标，将其归类到当前选中的目录。</p><p style="white-space: normal;"><img src="https://packmage.blob.core.chinacloudapi.cn/article/0/767.png" title="image-20191114114948628.png" alt="image-20191114114948628.png"></p><p style="white-space: normal;"><br></p><h1 style="white-space: normal;" id="docstree2">设置封面图</h1><p style="white-space: normal;">您可以对盒型目录和盒型本身设置封面图，来替代掉系统默认的封面图。</p><p style="white-space: normal;"><img src="https://packmage.blob.core.chinacloudapi.cn/article/0/768.png" title="image-20191114115213212.png" alt="image-20191114115213212.png"></p><p style="white-space: normal;">[图示，创建目录封面图]</p><p style="white-space: normal;"><img src="https://packmage.blob.core.chinacloudapi.cn/article/0/769.png" title="image-20200309111909585.png" alt="image-20200309111909585.png"></p><p style="white-space: normal;"><br></p><p style="white-space: normal;">[图示，创建盒型封面图]</p><p style="white-space: normal;"><br></p><h1 style="white-space: normal;" id="docstree3">取消激活盒型</h1><p style="white-space: normal;">当您不想使用某些盒型的时候，您只要找到这些盒型，点击该盒型图标，即可以取消激活。</p>';
	var reg = /<h.*?>(.*?)<\/h.*?>/ig;
	var m = html.match(reg);
	var res = [];

	for (var i = 0; i < m.length; i++) {
		var ht = m[i];
		var ht_val = Number(ht[2]);
		var hm = {idx: i, val: ht_val, ref: null, text: ht.replace(reg, '$1'), html: ht};

		//非h1则向上找到父节点 val小于自身的即是
		if (ht_val > 1) {
			for (var j = 0; j < res.length; j++) {
				var hp = res[j];
				if (hp.val < ht_val) {
					hm.ref = hp.idx;
					break;
				}
			}
		}

		res.push(hm)
	}

	return res
}