```
e.target 指向触发事件监听的对象。
e.currentTarget 指向添加监听事件的对象。
$('.main').on('click','span',function () {
      // target = span     currentTarget = main'
    })

```



