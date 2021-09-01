## 物理像素、css像素

设备像素（Device Pixels）：设备屏幕的物理像素，设备能控制显示的最小单位，我们可以把这些像素看作成显示器上一个个的点。

CSS像素（CSS Pixels）：是Web编程的概念，指的是CSS样式代码中使用的逻辑像素。

1个CSS像素在不同设备上可能对应不同的物理像素，这个比值是是设备的属性（Device Pixel Ratio，设备像素比）

在CSS规范中，长度单位可以分为绝对单位和相对单位。`px`是一个相对单位，相对的是设备像素（Device Pixels）。

```
DPR = 
物理像素数
 / 
逻辑像素数
```

### viewport

（1）layout viewport 布局

如果把移动设备上浏览器的可视区域设为viewport的话，某些网站会因为viewport太窄而显示错乱，所以这些浏览器就默认会把viewport设为一个较宽的值，比如980px，使得即使是那些为PC浏览器设计的网站也能在移动设备浏览器上正常显示。这个浏览器默认的viewport叫做 layout viewport。layout viewport的宽度可以通过 document.documentElement.clientWidth来获取。

（2）visual viewport 可视化

layout viewport的宽度是大于浏览器可视区域的宽度的，所以还需要一个viewport来代表浏览器可视区域的大小，这个viewport叫做 visual viewport。visualviewport的宽度可以通过document.documentElement.innerWidth来获取。

（3）ideal viewport 理想

ideal viewport是一个能完美适配移动设备的viewport。首先，不需要缩放和横向滚动条就能正常查看网站的所有内容；其次，显示的文字、图片大小合适，如14px的文字不会因为在一个高密度像素的屏幕里显示得太小而无法看清，无论是在何种密度屏幕，何种分辨率下，显示出来的大小都差不多。这个viewport叫做 ideal viewport。

ideal viewport并没有一个固定的尺寸，不同的设备有不同的ideal viewport。例如，所有的iphone的ideal viewport宽度都是320px，无论它的屏幕宽度是320还是640。

ideal viewport的意义在于，无论在何种分辨率的屏幕下，针对ideal viewport 而设计的网站，不需要缩放和横向滚动条都可以完美地呈现给用户。

