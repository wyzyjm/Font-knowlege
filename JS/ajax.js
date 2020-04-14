function ajax(url, methods) {
	var http;
	if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 设置请求头
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// 函数监听
	/*
		this.readyState: 响应状态
			0: 请求未初始化
			1: 服务器连接已建立
			2: 请求已接收
			3: 正在处理请求
			4: 请求已完成且响应已就绪
		
		this.status : 状态码
			200: "OK"
			403: "Forbidden"
			404: "Page not found"
	*/
	http.onreadystatechange = function() {
		// 判断响应状态 && 响应码
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText)
		}
	}
	/**
	 * 1. 请求参数
	 * 2. 请求地址
	 * 3. 是否异步
	 */
	http.open(methods, url, true);
	// 发送请求
	http.send();
}

/**
 * 创建ajax步骤
 * 1. 创建XMLHttpRequest 对象
 * 2. 设置请求头
 * 3. 监听onreadystatechange 函数
 * 4. 开启请求
 * 5. 发送请求
 */
