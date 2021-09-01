function deepClone(val) {
  if (typeof val !== "object") {
    return val;
  }
  let newObj = Array.isArray(val) ? [] : {};
  for (const key in val) {
    let item  = val[key]
    newObj[key] = item instanceof Object;
  }
}

var a = {
  b: 1,
  c: {
    d: 2,
  },
};

var Q = deepClone(a);

Q === a;
