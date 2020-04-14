function test1(num) {
	var str = (+num) + '';
	var len = str.length;
	if (len <= 3) return str;
	num = '';
	while (len > 3) {
		len -= 3;
		num = ',' + str.substr(len, 3) + num;
	}
	return str.substr(0, len) + num;
}

function test2(num) {
	// ?= 正向匹配:匹配位置
	// ?! 正向不匹配:排除位置
	var str = (+num).toString();
	var reg = /(?=(?!\b)(\d{3})+$)/g;
	return str.replace(reg, ',');
}
