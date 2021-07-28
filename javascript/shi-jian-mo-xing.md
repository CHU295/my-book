### DOM0级模型

又称为原始事件模型，在该模型中，事件不会传播，即没有事件流的概念。事件绑定监听函数比较简单,有两种方式:

* HTML
  代码中直接绑定
  :

&lt;inputtype="button"onclick="fun\(\)"&gt;

* 通过
  JS
  代码指定属性值
  :

·**var**btn = document.getElementById\('.btn'\);

btn.onclick = **fun**;

移除监听函数：

**btn.onclick**= null;

### IE事件模型

IE事件模型共有两个过程:

·事件处理阶段\(target phase\)。事件到达目标元素,触发目标元素的监听函数。

·事件冒泡阶段\(bubbling phase\)。事件从目标元素冒泡到document,依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

事件绑定监听函数的方式如下:

```
attachEvent
(eventType, handler)
```

事件移除监听函数的方式如下:

```
detachEvent
(eventType, handler)
```

参数说明:

·eventType 指定事件类型\(注意加on\)

·handler 是事件处理函数

### DOM2级模型

属于W3C标准模型，现代浏览器\(除IE6-8之外的浏览器\)都支持该模型。在该事件模型中，一次事件共有三个过程:

·事件捕获阶段\(capturing phase\)。事件从document一直向下传播到目标元素,依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

·事件处理阶段\(target phase\)。事件到达目标元素,触发目标元素的监听函数。

·事件冒泡阶段\(bubbling phase\)。事件从目标元素冒泡到document,依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

u

