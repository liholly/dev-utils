export default function (agg, refKey, childrenKey) {
	var i, j, res = [];
	var run = function(a){
		for (i = a.length; i > 0; i--) {
			var p = a[i];
			var p_ref = p[refKey];
			p[childrenKey] = [];
			if (p_ref === 0 || p_ref) {
				for (j = a.length; j > 0; j--) {
					var c = a[j];
					var c_ref = c[refKey];
					if (c_ref === p_ref) {
						p[childrenKey].push(c);
						a.splice(j, 1);
					}
				}
			}
		}
	};

	run(agg);

	return agg
}