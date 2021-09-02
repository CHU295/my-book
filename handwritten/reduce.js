Array.prototype.myReduce = function (fuc, init) {
  let ind = 0;
  if (init === undefined) {
    init = this[ind];
    ind++;
  }
  while (ind < this.length) {
    init = fuc(init, this[ind]);
    ind++
  }
  return init;
};

var a = [1, 2, 3, 2, 1, 52, 63].reduce((pre, cur) => pre + cur);
var b = [1, 2, 3, 2, 1, 52, 63].myReduce((pre, cur) => pre + cur);
console.log(a, b);
