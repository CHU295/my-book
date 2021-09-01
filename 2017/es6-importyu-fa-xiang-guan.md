es6中 import语法导入默认置顶

![](/assets/import547554.png)

如下图，上框中采用import引入，下框中是直接写在js中

上面的写法是有效可以修改webpack publick\_path的，而下面的写法存在问题

import默认置顶，所以第二种写法去修改path的时候其实加载已经完成了，所以不会生效

链接：[https://github.com/webpack/webpack/issues/2776](https://github.com/webpack/webpack/issues/2776)

