function sum(a, b, c) {
  return a + b + c;
}
sum(1, 2, 3);

function currying(fuc) {
  let new_ = (...arg) => {
    if (fuc.length === arg.length) {
      return fuc(...arg);
    } else {
      return (...args) => new_(...arg, ...args);
    }
  };
  return new_;
}
const newSum = currying(sum);
console.log(newSum(1)(2)(3))
/**
 * 知识点备注
 * function 有 length 属性，表示的是必须入参的长度，参考mdn
 */


// add(1)(2, 3)(4)() = 10
function add(...arg) {
  let count = arg.reduce((pre, cur) => pre + cur);
  let new_add = (...args) => {
    if (args.length > 0) {
      count = count + args.reduce((pre, cur) => pre + cur);
      return new_add;
    } else {
      return count;
    }
  };
  return new_add;
}
