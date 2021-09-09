// 二进制求和
var addBinary = function (a, b) {
  let alen = a.length;
  let blen = b.length;
  let len = Math.max(a.length, b.length);
  let index = 0,
      more = 0,
      res = "";
  while (index < len) {
      let cur =
          (a[alen - index - 1] ?? 0) / 1 + (b[blen - index - 1] ?? 0) / 1 + more / 1;
      if (cur > 1) {
          more = 1;
      } else {
          more = 0;
      }
      res = (cur % 2) + res;
      index++;
  }
  return more===1?more+ res:res;
};