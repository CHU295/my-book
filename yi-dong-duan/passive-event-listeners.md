#### Passive Event Listeners是什么？ {#passive-event-listeners.E6.98.AF.E4.BB.80.E4.B9.88.EF.BC.9F}

Passive event listeners are a new feature in the DOM spec that enable developers to opt-in to better scroll performance by eliminating the need for scrolling to block on touch and wheel event listeners. Developers can annotate touch and wheel listeners with {passive: true} to indicate that they will never invoke preventDefault.

Passive Event Listeners是Chrome提出的一个新的浏览器特性：Web开发者通过一个新的属性passive来告诉浏览器，当前页面内注册的事件监听器内部是否会调用preventDefault函数来阻止事件的默认行为，以便浏览器根据这个信息更好地做出决策来优化页面性能。当属性passive的值为true的时候，代表该监听器内部不会调用preventDefault函数来阻止默认滑动行为，Chrome浏览器称这类型的监听器为被动\(passive\)监听器。目前Chrome主要利用该特性来优化页面的滑动性能，所以Passive Event Listeners特性当前仅支持mousewheel/touch相关事件。

#### 为什么需要Passive Event Listeners特性？

Passive Event Listeners特性是为了提高页面的滑动流畅度而设计的，页面滑动流畅度的提升，直接影响到用户对这个页面最直观的感受。这个不难理解，想象一下你想要滑动某个页面浏览内容，当你用鼠标滚轮或者用手指触摸屏幕上下滑动的时候，页面并没有按你的预期进行滚动，此时你内心往往会感觉到一丝不爽，甚至想放弃该页面。Facebook之前做了一项试验，他们将页面滑动的响应刷新率从60FPS降低到30FPS的时候，发现用户的参与度急速下降。

由前面对Passive Event Listeners特性的介绍可知，Passive Event Listenrers特性是让Web开发者来告诉浏览器，当前页面内注册的mousewheel/touch事件监听器是否属于被动监听器，以便让浏览器更好地做决策来提高页面的滑动流畅度。那么Chrome浏览器为什么需要知道是否被动监听器这个信息呢？浏览器知道这个信息之后，它要做什么决策呢？要回答这个问题，有必要先了解一下目前Chrome浏览器的线程化渲染框架，它是Passive Event Listeners特性的基础。

