class observe {
  events = {};
  on(type, callBack) {
    if (this.events[type]) {
      this.events[type].push(callBack);
    } else {
      this.events[type] = [callBack];
    }
  }

  off(type, callBack) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter((i) => i !== callBack);
    }
  }

  emit(type) {
    if (this.events[type]) {
      this.events[type] = this.events[type].forEach((i) => i());
    }
  }

  once(type, callBack) {
    let fn = () => {
      callBack();
      this.off(type, fn);
    };
    this.on(type, fn);
  }
}

let em = new observe();

em.once("once", function () {
  console.log("do once");
});

function makeMoney() {
  console.log("do OK");
}
em.on("do", makeMoney);
console.log("添加事件成功");
setTimeout(() => {
  em.emit("do");
  em.emit("once");
  console.log("第一次执行成功");
  em.off("do", makeMoney);
  setTimeout(() => {
    em.emit("do");
    em.emit("once");
    console.log("第二次失败，因为移除了");
  }, 2000);
}, 2000);
