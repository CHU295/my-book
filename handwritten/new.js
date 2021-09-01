function myNew(context, ...arg) {
  // 基于构造器 context 的原型创建一个新对象
  let obj = Object.create(context.prototype);

  // 把 this 指向新对象
  let res = context.apply(obj, arg);

  // res 不是对象的时候返回this
  return res instanceof Object ? res : obj;
}

function Person(name) {
  this.lastName = name;
}

var a = myNew(Person, 0);
