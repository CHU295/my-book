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
