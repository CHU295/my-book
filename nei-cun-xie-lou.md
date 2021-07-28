垃圾回收

["引用计数"](https://en.wikipedia.org/wiki/Reference_counting)reference counting

：语言引擎有一张引用表，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。

标记清除法



