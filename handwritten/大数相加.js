// 首先不考虑 bigint

function bigSum(a, b) {
  var maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  let more = 0,
    res = "";
  for (let i = b.length - 1; i >= 0; i--) {
    let cur = parseInt(a[i]) + parseInt(b[i]) + more;
    more = cur >= 10 ? 1 : 0;
    res = (cur % 10) + res;
  }
  return res;
}
let a = "9007199254740991";
let b = "1234567899999999999";
bigSum(a, b);
/**
 * padStart es6里面的补位，对应还有padEnd
 */
