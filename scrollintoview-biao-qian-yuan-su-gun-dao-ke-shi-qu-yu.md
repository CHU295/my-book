详情见mdn，移动端兼容性较差，详见can i use



**`Element.scrollIntoView()`**

 方法让当前的元素滚动到浏览器窗口的可视区域内。



```
alignToTop
一个Boolean值：
如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 scrollIntoViewOptions: {block: "start", inline: "nearest"}。这是这个参数的默认值。
如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的scrollIntoViewOptions: {block: "end", inline: "nearest"}。
scrollIntoViewOptions 可选 
一个带有选项的object：
{
    behavior: "auto"  | "instant" | "smooth",
    block:    "start" | "end",
}
behavior 可选
定义缓动动画， "auto", "instant", 或 "smooth" 之一。默认为 "auto"。
block 可选
"start", "center", "end", 或 "nearest"之一。默认为 "center"。
inline 可选
"start", "center", "end", 或 "nearest"之一。默认为 "nearest"。
```



