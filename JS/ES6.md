# ES6 
1. 是 es2015 以后的语言规范版本,包括2015

# babel
1. 将ES6转化为ES5

# ES6 String 升级
1. 采用 `` , ${变量}
2. 新增方法
> str.includes() ,返回false
> startsWith('参数'), endsWith('参数')   ... 开头结尾是否 有 参数 返回布尔值
> str.repeat(str1) ... 复制str1

# ES6 Arrry 升级
1. 箭头函数
2. 解构赋值 
3. 扩展运算
>	...arr : 展开数组
4. 扩展方法
> arr.form()  ... 将伪数组(对象形式的键值对)转化为 数组
> arr.find() : 找到第一个 返回该值 arr.findIndex() : 找到第一个,返回该索引
# ES6 对象 升级
1. 解构
2. Object.is(NaN, NaN) || === 对0 和NaN做特别处理