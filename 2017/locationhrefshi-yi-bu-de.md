最近在项目中遇到一个问题，微信环境下获取openid会刷新页面，因为项目及其古老，所以里面使用了location.href来跳转新页面。

然而这里就导致了一个bug，实际场景为某些接口在刷新页面前后分别加载了一次，造成了不必要的性能耗损，以及更为致命的是某页面为问卷调查，此页面对于访问等等做了相关限制，页面在加载时访问两次就会导致严重的问题。

在进行bug定位的时候发现了location.href跳转并没有立即执行，查阅相关资料后了解了其运行机制。

# location.href

window.location.href的赋值，并不会中断Javascript的执行立即进行页面跳转。

因为 LocationChange 行为在浏览器内核中是起定时器异步执行的。

异步执行的好处是为了防止代码调用过深，导致栈溢出，另外也是为了防止递归进入加载逻辑，导致状态紊乱，保证导航请求是顺序执行的。

# 代码实例

```
(
function
(){
    window.location.href= 
'http://www.baidu.com'
;
    console.log(123);
}())

复制代码
```

上述代码不会立即执行页面跳转，而是会先输出123，然后才会跳转到baidu页面

# 解决方法

```
(
function
(){
    window.location.href= 
'http://www.baidu.com'
;
    
return
 
    console.log(123);
}())

复制代码
```

解决方法也很简单，在后面加上return即可

  


作者：CHU295

  


链接：https://juejin.im/post/5e1540c36fb9a048217a1def

  


来源：掘金

  


著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

