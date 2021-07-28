Js是单线程的，所谓单线程，是指在JS引擎中负责解释和执行JavaScript代码的线程只有一个。不妨叫它主线程。

但是实际上还存在其他的线程。

分为同步异步

工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。

消息队列：消息队列是一个先进先出的队列，它里面存放着各种消息。

事件循环：事件循环是指主线程重复从消息队列中取消息、执行的过程。

是一个程序结构，用于等待和发送消息和事件

React setstate合并队列原理，vue nextTick数据变化一次强制渲染



在Job queue中的队列分为两种类型：macro-task和microTask。我们举例来看执行顺序的规定，我们设

macro-task队列包含任务:_**a1, a2 , a3**_  
micro-task队列包含任务:_**b1, b2 , b3**_

执行顺序为，首先执行marco-task队列开头的任务，也就是_**a1**_任务，执行完毕后，在执行micro-task队列里的所有任务，也就是依次执行_**b1, b2 , b3**_，执行完后清空micro-task中的任务，接着执行marco-task中的第二个任务，依次循环。

了解完了macro-task和micro-task两种队列的执行顺序之后，我们接着来看，真实场景下这两种类型的队列里真正包含的任务（我们以node V8引擎为例），在node V8中，这两种类型的真实任务顺序如下所示：

macro-task队列真实包含任务：

**script\(主程序代码\),setTimeout, setInterval, setImmediate, I/O, UI rendering**

micro-task队列真实包含任务：  
_**process.nextTick, Promises, Object.observe, MutationObserver**_

由此我们得到的执行顺序应该为：

_**script\(主程序代码\)—&gt;process.nextTick—&gt;Promises...——&gt;setTimeout——&gt;setInterval——&gt;setImmediate——&gt; I/O——&gt;UI rendering**_

在ES6中macro-task队列又称为ScriptJobs，而micro-task又称PromiseJobs



```
setTimeout(function(){console.log(1)},0);
```

```

new Promise(function(resolve,reject){
   console.log(2);
   setTimeout(function(){resolve()},0)
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);

//输出的是  2 6 5 1 3 4
```

首先分析Job queue的执行顺序：

_**script\(主程序代码\)——&gt;process.nextTick——&gt;promise——&gt;setTimeout**_

I\)_**主体部分**_： 定义promise的构造部分是同步的，  
因此先输出2 ，主体部分再输出6（同步情况下，就是严格按照定义的先后顺序）

II\)_**process.nextTick**_: 输出5

III）_**promise**_： 这里的promise部分，严格的说其实是promise.then部分，输出的是3,4

IV\)_**setTimeout**_： 最后输出1

在于promise的构造中，没有同步的resolve，因此promise.then在当前的执行队列中是不存在的，只有promise从pending转移到resolve，才会有then方法，而这个resolve是在一个setTimout时间中完成的，因此3,4最后输出。

