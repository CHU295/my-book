class myPromise {
  constructor(fuc) {
    try {
      fuc(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  status = "pending";
  value = null;
  err = null;
  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    this.status = "fullfilled";
    this.value = value;
    this.onFulfilledCallback.length > 0 &&
      this.onFulfilledCallback.forEach((call) => call(value));
  };

  reject = (err) => {
    this.status = "rejected";
    this.err = err;
    this.onRejectedCallback.length > 0 &&
      this.onRejectedCallback.forEach((call) => call(err));
  };

  then = (onFulfilled, onRejected) => {
    return new myPromise((resolve, reject) => {
      if (this.status === "fullfilled") {
        try {
          onFulfilled(this.value);
        } catch (error) {
          reject(error);
        }
      } else if (this.status === "rejected") {
        onRejected(this.err);
      } else if (this.status === "pending") {
        this.onFulfilledCallback.push(onFulfilled);
        this.onRejectedCallback.push(onRejected);
      }
    });
  };
}
// 使用
const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promise.then((value) => {
  console.log(1);
  console.log("resolve", value);
});

promise.then((value) => {
  console.log(2);
  console.log("resolve", value);
});

promise.then((value) => {
  console.log(3);
  console.log("resolve", value);
});
