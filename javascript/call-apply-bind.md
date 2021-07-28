Apply call 改变this指向 call\(\)接受的是一个参数列表

apply\(\)接受的是一个数组参数

call和apply都是对函数的直接调用

bind方法返回的仍然是一个函数，因此后面还需要\(\)来进行调用才可以

**语法：**  
function.call\(thisObj \[, arg1\[, arg2\[, \[, ...argN\]\]\]\]\);  
function.apply\(thisObj \[, argArray\] \)；

> **定义：** call 和 apply 可以让我们手动设置 this 指向  
> **两个参数：** 第一个参数是 绑定 this 指向；第二个参数是 向将要执行的函数传递的参数  
> **区别：** 第二个参数， call 以一个一个的形式传递参数；apply 以数组的形式传递参数

##### 使用示例

```
var a = 10;

function
 sum(num1, num2) {
    console.log(this.a + num1 + num2);
}
var obj = {
    a: 20
}

sum(10, 10);    //30
sum.call(obj, 10, 10);       // 40
sum.apply(obj, [10, 10]);    // 40
```



