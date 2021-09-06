---
# JS基础
## object.prototype.tostring.call instanceof Array.isArray typeof
1 可能被修改原型链导致错误

2 是判断原型链上面是否有原型，弊端是只能判断对象 可能被修改原型链导致错误

3 是最好的方法，不过可能存在不兼容

4 只能判断基础类型

## call apply bind
共同之处：改变this指向 

不同之处：bind不会立即执行，call apply会立即执行；call接受参数，apply接受数组

## let const var
var 存在变量提升 可以重复声明
let const 不会变量提升，不能重复声明，存在锁死。const 与 let不同的是const定义的引用不能修改

## defer async
都是异步加载，前者浏览器渲染的时候执行，后者加载完就执行
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a27b84f0dd9049b381fa44e6dee4f439~tplv-k3u1fbpfcp-zoom-1.image)

## 箭头函数 与 普通函数
函数里面的剩余参数是真数组，普通函数里面的arguments是类数组，需要用Array.from转换

前者没有原型，所以没有上下文，无法当做构造函数，没有this，或者说this指向了上级，没有arguments

## 函数声明 函数表达式
前者会创建一个与函数同名的变量，指向这个函数，会在代码执行前创建，并一直占用内存，所以存在变量提升

后者创建了匿名函数，变量指向这个函数，在执行后才会被定义，不会变量提升
```
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

## instanceof原理
判断原型链上是否有此原型

## fetch axios
fetch收到一个错误码的时候不会进入reject而是会进入resolve

axios也是封装的xhmhttprequest的，如果没有则走的node http模块
```
 // 用 XHR 发起一个GET请求\
var xhr = new XHMHttpRequest();
xhr.open('GET', url);
 xhr.responseType = 'json';  
xhr.onload = function(){}; 
 xhr.onerror = function(){};
 xhr.send();
 
// 用 Fetch 完成同样的请求\
fetch(url).then(function(response){
return response.json();
}).then(function(jsonData){}).catch(function(){  });
```
## webworker
js是单线程的，使用webworker可以在主线程外单独运行一个线程执行任务。相互之间可以通过postmessage发送信息

## 原型链 继承方式
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63a8a7f6da4748dc971da954f4dba45e~tplv-k3u1fbpfcp-zoom-1.image)

### 原型继承
```
function Father() {
    this.text = '1';
}
Father.prototype.someFn = function() {
    console.log(1);
}
Father.prototype.someValue = '2';

function Son(){
    this.text1 = 'text1';
}
// 函数原型指向构造函数的实例
Son.prototype = new Father();
```
简单易操作，缺点是无法向父类传参不灵活；父类属性被所有实例共享，子类修改会影响其它子类

### 构造函数继承
```
function SuperType(name){ 
 this.name = name; 
} 
function SubType() { 
 // 继承 SuperType 并传参
 SuperType.call(this, "Nicholas"); 
 // 实例属性
 this.age = 29; 
} 
let instance = new SubType(); 

```
可以解决上面的问题，但是只能继承父类的属性，不能继承父类原型上的方法等；每次实例化都需要执行函数，无法复用
### 组合继承
```
function Parent(name) {
   this.name = name
   this.colors = ["red", "blue", "yellow"]
}
Parent.prototype.sayName = function () {
   console.log(this.name);
}

function Child(name, age) {
   // 继承父类属性
   Parent.call(this, name)
   this.age = age;
}
// 继承父类方法
Child.prototype = new Parent();

Child.prototype.sayAge = function () {
   console.log(this.age);
}

let child1 = new Child("yhd", 19);
child1.colors.push("pink");
console.log(child1.colors); // ["red", "blue", "yellow", "pink"]
child1.sayAge(); // 19
child1.sayName(); // "yhd"

let child2 = new Child("wxb", 30);
console.log(child2.colors);  // ["red", "blue", "yellow"]
child2.sayAge(); // 30
child2.sayName(); // "wxb"

```
解决了上面的问题，同样因为父类被执行两次性能不好；

### 原型式继承
```
function (obj) {
    function A(){}
    A.prototype = obj
    return new A()
}
```
兼容性好，跟上面某个一样，共享继承数据，容易被修改影响，不能传参

### 寄生式继承
```
function createAnother(original){ 
 let clone = object(original); // 通过调用函数创建一个新对象
 clone.sayHi = function() { // 以某种方式增强这个对象
 console.log("hi"); 
 }; 
 return clone; // 返回这个对象
}
```
缺点如上

### 寄生组合式继承
```
function Father(...arr) {
    this.some = '父类属性';
    this.params = arr;
}
Father.prototype.someFn = function() {
    console.log(1);
}
Father.prototype.someValue = '2';
function Son() {
    Father.call(this, 'xxxx');
    this.text = '2222';
}
function inhertPro(son, father){
    // 原型式继承
    var fatherPrototype = Object.create(father.prototype);
    // 设置Son.prototype的原型是Father.prototype
    son.prototype = fatherPrototype;
    // 修正constructor 指向
    // constructor的作用：返回创建实例对象的Object构造函数的引用。
    // 在这里保持constructor指向的一致性
    son.prototype.constructor = son; 
}
inhertPro(Son, Father);
var sonInstance = new Son();

```

## 深浅拷贝 哪些场景
json方式会丢失function 日期正则会转成字符串 undefined  symbol会丢失
## object.js
跟===一样，但是解决了-0 === +0 true NaN === NaN false的问题

# react
## flushSync关闭队列模式
也就是说可以用这个函数，让usestate同步执行

## diff原理 
三大原则
+ dom节点跨层级操作较少，只有创建删除操作
+ 组件间的diff，如果是相关组件可以通过 shouldComponentUpdate 控制，不同组件则直接删除创建
+ 元素节点的比较，相比于之前的删除 创建比较方法，新增了通过key来优化识别，做到移动操作

## 为什么有hook
在以前的版本中有很多待解决的问题
+ 组件之间的状态逻辑很难复用，常用的解决方案高阶组件会带来新的问题，1是代码结构需要重构，2是会带来嵌套地狱，而hook本身就是状态管理，可以在内部实现各种逻辑，并且天然支持复用
+ 生命周期中常常包涵多重逻辑，容易出错，这也是很多人选择使用状态管理的原因，使用hook可以拆分开
+ class类的写法难以理解，与函数组件存在巨大的差异

## fiber
react对于核心算法的一种重构

在16以前整个更新过程是同步的，diff整个虚拟dom树从上往下再网上，整个过程无法中断，如果层级较深，可能会造成页面阻塞。

16以后引入了fiber，他是一个承载各种节点信息的工作单元，也是一个对象，与16以前不同的是他解决了痛点，每个fiber执行完成都会去查看是否有优先级更高的任务，如果有就会中断当前任务，为了实现这一工作，react团队实现了一个类似requestidlecallback的功能，之所以不用原生的这个api是因为受限于它的帧限制。

这个api的作用就是在浏览器空闲的时候会去执行优先级相对低的任务

## unsafe生命周期
+ componentwillmount 第一次渲染可能被中断，因此unmount周期不一定会被执行，会造成内存渲染
+ componentwillreceiveprops 在这个周期里面修改父组件值，可能会造成重复执行死循环
+ componentwillupdate 因为这个与didmount中间会有一段时间，如果在这个时间拉升浏览器会造成页面数据不对
新周期 getSnapshotBeforeUpdate  getDerivedStateFromProps

## 原理 
1. 初始化阶段，每次使用 hook 都会调用 mountWorkInProgressHook 函数，生成一个 hook 对象
2. hook 对象的基本结构

```
{
  memoizedState:null, //储存usestate 值
  baseState:null, // 每次更新产生的值
  baseQueue:null, // 当前的队列
  queue: null , // 更新队列
  next: null, // 指向下一个hook
}
```

3. 在组件初始化完成后会形成一个链表，最终绑定在 workInProgress 的 memoizedState 上面，hook 的状态也绑定在这个属性上面；

但是 effect 副作用钩子，会绑定在 workInProgress 的 updateQueue 上面，在 commit 阶段执行完成后依次触发。使用深度遍历获取

4. 在更新的时候会执行 updateWorkInProgressHook 函数

### usestate

初始化的时候调用 mountstate 函数，把 initstate 赋值给 memoizedState 和 baseState，queue 保存负责更新的事件

更新时，获取新的 hook，合并 queue，更新值，返回新的 memoizedState

### useeffect

初始化的时候调用 mountEffect 函数，在创建完 hook 把 信息 存入 memoizedState，并且其中还会调用 pushEffect 函数把 effect 放入 workInProgress 的 updateQueue 中

更新的时候判断 deps 是否变化， 如果没有变化则直接执行 pushEffect，如果不相等则更新 effect，并赋值给 memoizedState

### usememo

初始化的时候执行第一个参数的函数，生成要缓存的值，然后将值与 deps 记录下来，赋值给 memoizedState

更新的时候判断 deps 是否变化，没有更新直接返回缓存的值，如果有更新则重新生成并赋值给 memoizedState

```
function mountMemo(nextCreate,deps){
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
```

### useRef

初始化的时候创建一个 ref 对象，用对象的 current 属性保存 initvalue，最后写入 memoizedState

更新的时候没有任何变化，直接返回之前的 hook.memoizedState

```
function mountRef(initialValue) {
  const hook = mountWorkInProgressHook();
  const ref = {current: initialValue};
  hook.memoizedState = ref;
  return ref;
}
```

## setstate同步还是异步
同步的，只不过react有队列机制，所以看起来是异步的。在react事件中会把isbatchupdate设为true标识有队列，结束后会设置成false

而在原生事件及settimeout里面，不会走react的机制，所以是同步的

## 为什么不能在循环里面使用hook
看hook原理
## 合成事件
为了磨平差异性，使得开发者不需要关注兼容性，统一管理事件，提高性能
17后，react重置了合成事件机制，原先的事件统一绑定在document上面，现在是每个应用（即调用ReactDOM.render的节点）的根节点

## 展望
react18 会把所有事件都合并到队列里面，现在的原生及定时器都是不会走队列机制的

另外官方会提供ssr

# webpack 
## webpack构建流程
1. 初始化参数，从配置文件与shell语句中读取合并参数
2. 从第一步得到的参数加载各种插件
3. 确定入口， 通过入口文件，找到所有依赖文件调用配置的loader对其进行编译
4. 编译完成后得到各个模块直接的依赖关系，组装成一个个包含多个模块的chunk代码块
5. 把输出的文件内容写入文件系统
## loader plugin

loader本质是插件，对内容进行转换，对资源进行预处理以便于webpack能读懂；

plugin是插件，扩展webpack功能，一般是通过监听webpack事件，在需要的时候改变输出结果
## npm安装原理
+ 执行npm install后，会根据package.json递归获取依赖关系树
+ 检查本地是否有缓存，如果没有则从registry 远程获取下载地址
+ 下载包缓存在.npm文件夹，win系统缓存在app-data npm-cache
+ 解压下载的包，写入node-modules

针对重复的包，如果是相互兼容的则保存高版本的，如果不兼容则会保留两个包
## COMMONJS
所有代码都运行在模块作用域，不会污染全局，首次加载完成就会缓存，后续再次加载只会返回缓存结果，需要清除缓存才会再次执行。输出的是值的拷贝

主要用在node服务端，以同步的方式加载模块，因为服务端模块文件都存在磁盘，读取速度非常快。不适用于浏览器端，因为受限于网络原因，更适合异步加载

## es6 module
+ commonjs是运行时加载，esm是编译时输出接口
+ commonjs是加载整个模块，esm则是加载其中单独的接口
+ commonjs输出的是值的拷贝，esm输出的是值的引用，模块内部改变会影响外部引用的改版
+ comonjs值的拷贝，es6为值的引用

## AMD&&requirejs
异步加载机制，对于依赖的模块，推崇依赖前置，提前知悉，也就是说在define方法里传入的依赖模块会在一开始就下载执行

## CMD
依赖就近，延迟加载，只有在require的时候才会执行

## commonjs esm区别，循环引用
esm是地址的引用，怎么循环都没问题

commonjs只会返回当前执行的，如下
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/469631011f024ee19144632c43378592~tplv-k3u1fbpfcp-zoom-1.image)
## module.export 与 export 
两者是一样的，后者是简写，区别在于
```
export.a = 1 // 正常
export = a // 不能这样写，因为会导致export指向另一个引用地址
```
## webpack热加载原理
webpack检测到文件变化，重新编译存进缓存，通知devserver，devserver把新的hash发给hmrplugin，对比后生成一个hot-update.json通过长链接请求服务端，从内存中取出对应的js文件，然后插入到文档中执行；

# 网络 
## http1 http1.1 http2 超文本传输协议  2015年面世
1. http1每一个请求都需要tco链接
2. http使用keepalive支持同一个tcp传输多个同域请求
3. http2
    
    + 多路复用 允许单一的http同时发起多重的请求 将所有传输信息采用二进制编码分帧。减少服务器链接压力，内存占用更少，提高传输速度
    + 请求头与行会被压缩
    + 支持服务器推送
    
  
## 网络安全
1. xss 跨站脚本攻击
    + 反射型xss  攻击者诱导用户访问一个带有恶意代码的 URL 后，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端，浏览器端解析这段带有 XSS 代码的数据后当做脚本执行，最终完成 XSS 攻击。
    + dom型xss 主要表现为修改页面dom节点，属于前端漏洞
    + 储存性xss 持久性 把恶意脚本存放在服务器
    使用编码转义处理

2. csrf 跨站伪造请求
是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

检查refer token验证

httponly 如果设置了则js脚本无法渠道cookie信息
## OSI七层模型

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3d3c92de3cb466fa5e804a95d4fc405~tplv-k3u1fbpfcp-watermark.image)

## TCP UDP

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a92a996db400452e8c6508cfb18f223b~tplv-k3u1fbpfcp-watermark.image)

## 三次握手
1. 客户端发送ayn建立连接同步序列编号给服务端，自己进入等待状态
2. 服务端接受到后，吧syn同步序列编号与ack确认字符打包一起发送给客户端
3. 客户端收到后，再把确认字符发送给服务端
4. 服务端把数据发送给客户端
5. ![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70c7e6f4e9374d5682c6e2e50cb82008~tplv-k3u1fbpfcp-zoom-1.image)


## 四次挥手
1. 主动方返送fin结束标识
2. 被动方接受fin标识，返回ack确认报文，序号+1
3. 被动方发送fin标识
4. 主动方收到fin，+1发送回去
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ce80c9e18f144bead9789dea260968b~tplv-k3u1fbpfcp-zoom-1.image)

## 302 304深入原理
301永久重定向 302暂时重定向 2 3 7一样的，不过2是http1标准 304使用客户端缓存

## 强缓存 弱缓存
在http1里面，使用的Expires，但是因为是绝对时间，修改时区会带来问题，所以1.1引入了后面的cache-control

response返回头里面携带cache-conctrol，设置max-age public private immutable；如果没有过期则会从内存直接读取；这里涉及到刷新浏览器，如果是指定immutable则刷新也不变化

协商缓存 通过etag类似hash last-modify最后修改时间判断，在访问资源的时候带上这两个字段(会重命名，服务端判断这些以返回200新资源替换或者304直接使用缓存的

## cdn原理
1. 用户访问域名的时候，首先向本地LDNS发起域名解析
2. ldns如果有直接返回，没有则向授权dns查询；
3. 授权dns解析后返回域名cname对应的别名；
4. 然后搭配dns调度系统，根据用户节点返回最佳的ip地址；
5. 用户根据ip去访问资源；
6. 边缘节点如果有直接返回，没有的话去中心节点拿，然后再返回
## URL URI URN / uniform resource 
+ uri 统一资源标识符 
+ url 上面的子集，统一资源定位符，包含了路径
+ urn 统一标识名

都是唯一的，url

# 浏览器 
## 页面渲染流程
1. dns解析域名获得ip
2. 浏览器访问服务器
3. 三次握手后，服务器处理完成返回资源
4. 浏览器拿到资源后解析生成页面
    1. 生成dom树
    2. 生成cssom树
    3. 执行js
    4. 生成render tree
    5. 生成页面布局
    6. 渲染节点样式
重绘repaint 回流reflow
## 层叠上下文
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f725fb26e334dc4a113a4d31392b59f~tplv-k3u1fbpfcp-zoom-1.image)
## 项目优化
+ 减少http请求
+ 域名拆分，增加浏览器并行速度
+ 图片合并
+ gzip压缩
+ cdn加载依赖
+ 按需加载
+ 懒加载

## 内存管理
现在一般使用的是引用标记，变量进入上下文的时候会将其标记为引用，出去的时候则标为不再引用，但不是不要就释放，而是在下一次垃圾回收时回收；

在老版本的ie中使用的是标记计数，最早期会实时的垃圾回收，非常影响性能
## 内存泄漏
首先明白内存泄露的定义，是指不需要的变量依然占用内存不会被释放，堆积起来最终导致卡死等等

1. 常见的是在非严格模式里面，内部变量会自动提升为全局变量，导致不会被释放
2. 其次就是定时器这种，当定时器引用外部变量的时候，定时器没有结束会导致变量一直存在
3. 然后是dom的引用，比如现在定义了a变量执行一个节点，a如果在使用后没有设空，那么后期即使删除了这个节点，依然会存在

## 线程进程
故名意思每个进行中的程序就是进程，每个进程里面有多个线程，每个线程负责单独的任务，进程的内存是独立的，进程里面的线程共享内存

浏览器网络请求是多线程的，有并发限制，页面渲染是单线程的

## 堆heap 栈stack
栈是自动分配的，自动释放，比如js基本类型数值就存在其中，先进先出

而堆是动态分配的，一般需要手动释放内存，常见的引用对象存在其中，栈里面存储的是一个指针，指向改堆地址

## 解释性 编译性语言
编译性一般编译后再运行，而解释性语言一般运行时才编译，所以相对会变较慢，但是因其可以通过不同的解释器转换成不同的机械码，所以跨平台支持更好

## 交叉编译
在一个平台上生成另一个平台可以执行的代码

## 常用的设计模式
##  发布订阅模式与观察者模式
后者中，被观察者会自己维护一个观察者队列，发生变化会自己通知相关观察者

而在前者中，发布者通关第三方发布者（类似秘书）去通知，而订阅者也会委托具体的订阅者去处理

## 设计模式
1. 装饰者模式-指对现有对象动态添加新功能，但又不会改变其结构，相当于对其进行包装
2. 外观模式
3. 单例模式
4. 代理模式
5. 工厂模式
6. 迭代模式
## 编程范式
函数式编程 面向对象编程 指令式编程 程序编程

## aop面向切面编程
面向对象的一种方式，动态的添加功其他代码
## 正向代理 反向代理
都是代理，唯一区别是一个在客户端实现一个在服务端实现，前者不知道服务端地址，后者不知道请求者真实身份
## service worker
基于web worker，独立于主线程之外 处于服务器有浏览器中间，可以拦截网络请求，缓存文件，可以充当代理服务器，可以访问数据库，支持推送


```
function object_is(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return x !== x && y !== y;
    }
  }
```
## event loop
搞清楚原理，搞清楚node老版本的区别

常出现于笔试题执行顺序

# 额外
## 为什么不用hash 路由用history 以及区别
hash #是在url后面添加参数，修改不会刷新网址也不会导致页面刷新，通过onhashchange监听

利用了 HTML5 History Interface 中新增的 pushState()和 replaceState()方法，修改真是的url但是不会导致页面刷新，刷新是真是的url刷新，缺点是刷新会404，需要后端配置

hash是纯前端实现，修改不会刷新地址，history是H5原生api支持的，不过需要服务端配置重定向，等等，自行了解实现原理及区别

### 为什么不用hash
因为在微信环境可能会出现各种异常，它会处理掉你的hash。

而且本身hash路由只是一种暂行的解决方案，并不是正式的规范，所以还是建议使用history
