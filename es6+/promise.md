三种状态，pending、fullfilled、rejected

优点：代码、逻辑清晰，避免callback多层嵌套形成回调金字塔；

 容易捕获异常。

.race\(\) 当数组中多个回调中的一个完成以后出发；.all\(\) 当数组中多个回调全部完成出发fulfailed，或者当其中一个失败出发rejected。

如果传递空数组，all会立即决议，决议结果是fullfilled，值是undefined

race会永远都不决议，程序卡死……

处理方法，可以通过Promise.resolve\(\)方法对不确定的值进行Promise化，返回一个Promise对象

