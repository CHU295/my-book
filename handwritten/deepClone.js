function deepClone(val) {
  if (typeof val !== "object") {
    return val;
  }
  // 需要考虑正则时间戳，这里没写，可以补上正则 日期等等各种转换
  let newObj = Array.isArray(val) ? [] : {};
  for (const key in val) {
    let item = val[key];
    newObj[key] = item instanceof Object ? deepClone(item) : item;
  }
  return newObj
}

var a = {
  b: 1,
  c: {
    d: 2,
  },
};

var Q = deepClone(a);
