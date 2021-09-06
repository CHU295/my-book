function compose(...arg) {
  return function (...args) {
    return arg.reduce((pre, cur) => cur(pre(...args)));
  };
}
function a(val) {
  return val + 1;
}
function b(val) {
  return val + 1;
}
var c = compose(a, b);
