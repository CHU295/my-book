// 实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
  list = 0;
  sch = [];
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve;
      if (this.list >= 2) {
        this.sch.push(promiseCreator);
      } else {
        this.dos(promiseCreator);
      }
    });
    // TODO
  }

  dos(promiseCreator) {
    this.list++;
    promiseCreator().then(() => {
      this.list--;
      if (this.sch.length > 0) {
        this.dos(this.sch.shift());
      }
      promiseCreator.resolve();
    });
  }
  // TODO
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
