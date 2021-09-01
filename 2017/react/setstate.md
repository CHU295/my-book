setState方法通过一个队列机制实现state更新，当执行setState的时候，会将需要更新的state合并之后放入状态队列，而不会立即更新this.state\(可以和浏览器的事件队列类比\)。

 /

