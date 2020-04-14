# html5
1.  不急于 SGML
# 语义化
1. 代码结构清晰
2. 利于搜索引擎优化
3. 方便其它设备解析
4. 便于团队开发维护

# 标准模式和兼容模式的区别
1. 标准模式
>	遵循最新标准的网页
-	盒模型  : width = width
-	行内元素无法设置宽高
-	magin : 0 auto ; 可以使快元素居中
2. 兼容模式
> 宽松的向后兼容的方式显示网页
- 盒模型 : width = width + padding + border
- 行内元素可以设置宽高
- margin : 0 auto ; 不可以使块元素居中

# link 和 @import 的区别
1. link 
> 是标签
> 页面加载同时会加载 link
2. @import
> 是css提供的
> 页面加载完毕后再加载 @import

# html5新特性
1. 语义化标签
	header footer section articel aside nav
2. 表单控件
> 类型 : color date email number tel url 
> 属性 : placehoder required min max
3. 视频音频
> 视频 : video
> 音频 : auto
4. canvas
5. 地理定位
6. 拖拽
7. 存储
> localstorage : 永久存储
> sessionstorage : 浏览器关闭失效
8. 新事件
> onresize
> onscroll
> onplay
> onpause
9. WebSocket
> 单个 TCP 连接上进行全双工通讯的协议

# 网页验证码
1. 区分是用户还是 程序
2. 防止黑客进行不断的登录尝试

# 如何解决h5兼容性问题
1. 使用html5shiv.js
2. 通过 document.createElement 创建新标签