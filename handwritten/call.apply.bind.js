Function.prototype.myCall = function (context = window, ...arg) {
  let key = Symbol();
  context[key] = this;
  const res = context[key](...arg);
  delete context.key;
  return res;
};

Function.prototype.myApplay = function (context = window, arg) {
  let key = Symbol();
  context[key] = this;
  const res = context[key](...arg);
  delete context.key;
  return res;
};
Function.prototype.myBind = function (context = window, ...arg) {
  let that = this;
  return function () {
    return that.call(context, ...arg);
  };
};

let Person = {
  name: "default",
  say: function (age = "未知") {
    console.log(`姓名：${this.name},年龄${age}`);
  },
};
const A = {
  name: "A",
};

Person.say.myApplay(A, [99]);
