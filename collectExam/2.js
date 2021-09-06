const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

var q = flatten(obj);
//  结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
function flatten(obj) {
  let ob = {};
  const r = (o, p_path = "", isArray) => {
    for (let key in o) {
      let item = o[key];
      key = p_path ? p_path + (isArray ? "[" + key + "]" : "." + key) : key;
      if (Array.isArray(item)) {
        r(item, `${key}`, true);
      } else if (Object.prototype.toString.call(item) === "[object Object]") {
        r(item, `${key}`);
      } else {
        ob[key] = item;
      }
    }
  };
  r(obj);
  return ob;
}
console.log(q);
// 网上看见随便写的，比较粗糙，优化空间较大
