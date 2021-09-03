// 原型链继承
function Person() {
  this.a = 1;
}
Person.prototype.F = function () {
  console.log(this.a);
};
Person.prototype.F1 = 2;

function Son() {
  this.text1 = "text1";
}
// 函数原型指向构造函数的实例
Son.prototype = new Person();
let A = new Son();
/**
 * 简单易操作
 * 缺点是共享父类会被其它子类修改，并且不支持传参
 */

// 构造函数继承
function Parent(name) {
  this.info = { name: name };
}
Parent.prototype.F1 = 2;
function Child(name) {
  Parent.call(this, name);
  this.q = 1;
}
let A = new Child(1);
/**
 * 无法访问父类方法
 */

// 组合继承
function Parent(name) {
  this.info = { name: name };
}
Parent.prototype.F1 = 2;
function Child(name) {
  Parent.call(this, name);
}
Child.prototype = new Parent();
let A = new Child(1);
/**
 * 解决了上面的问题，但是父类会执行两次，性能不好
 */

// 原型式继承
function CopyObj(obj) {
  function A() {}
  A.prototype = obj;
  return new A();
}
let person = {
  name: "yhd",
  arr: [1, 2],
};
let person1 = objectCopy(person);
/**
 * 父类共享，不能传参
 * 这里有个误区，不要以为给 person1 赋值name不冲突
 * 那是因为赋值给了person1自己的name
 * 而不是修改了构造函数person的name
 * 可以调用arr修改数组试试
 */

// 寄生式继承
function createAnother(obj) {
  let clone = CopyObj(obj);
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}
/**
 * 属于原型式继承的升级版
 */

// 寄生组合式继承
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
function child(name) {
  Parent.call(this, name);
}
// 只有一个参数的时候 与 Object.create相同
function create1(obj) {
  function A() {}
  A.prototype = obj;
  return new A();
}
function create(child, Parent) {
  let new_ = create1(Parent.prototype);
  new_.constructor = child;
  child.prototype = new_;
}
// 所以可以改写成
child.prototype = Object.create(Parent.prototype);
child.prototype.constructor = child;

create(child, Parent);
