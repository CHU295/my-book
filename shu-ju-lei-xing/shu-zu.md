搞清楚浅拷贝、深拷贝

Slice\(a,b\)截取数组，不会修改原数组，返回新数组，从a下标到b下标前一个。\[1,2,3,4\].slice\(0,3\) //1,2,3

Splice\(a,b,c\)修改数组，会改变原数组，添加或删除数组，从a下表开始删除b个或者添加c

Split\(a,b\)字符串转数组，字符串切成数组，a切割条件，b片段数，多余的丢弃

Join\(a\)数组转字符串，用a隔开

深拷贝，注意各种方法原理

slice（）

concat（）

\[ ...arr2 \] = arr

JSON.parse\(JSON.stringify\(obj\)\)注意这种方法的缺点



参考：

[https://zhuanlan.zhihu.com/p/29514159](https://zhuanlan.zhihu.com/p/29514159)

