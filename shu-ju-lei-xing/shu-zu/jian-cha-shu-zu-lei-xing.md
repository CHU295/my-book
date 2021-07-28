Object.prototype.toString.apply\( \)

Array.isArray



instanceof 的判断方法是：左侧的原型链中的各个 \[\[prototype\]\] 指针是否指向 Array.prototype（即右侧对象的原型），如果有则返回 true。

