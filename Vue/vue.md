# 数据双向绑定原理
1. Object.defineProperty()

# Vue组件传值
1. 父 传 子
> 子 props 接受
> 父 :参数='父参数'
2. 子 传 父
> 通过 $emit()
3. 兄弟传值
>  在main.js 中挂载一个新的 new Vue();
>  a组件 this.挂载名称.$emit('事件'.值)
>  b组件 在beforeCreate 事件中 this.挂载名称.$on('事件名称',(data)=>{})

# Vue钩子函数
> beforeEach(to,form,next){}