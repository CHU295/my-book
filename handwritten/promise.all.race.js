function MyPromiseAll(arr) {
  let list = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((pro, index) => {
      pro.then(
        (res) => {
          list[index] = res; // 直接push顺序不对！！！！
          count++;
          if (count === arr.length) {
            resolve(list);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}
function MyPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((pro, index) => {
      pro.then(
        (res) => {
          resolve(list);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}
