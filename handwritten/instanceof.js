function myInstanceof(l, r) {
  let r_ = r.prototype;
  let l_ = l.__proto__;
  while (l_ !== null) {
    if (r_ === l_) {
      return true;
    } else {
      l_ = l_.__proto__;
    }
  }
  return false;
}

console.log(myInstanceof({}, Object));
