function mySetInterVal(fuc, delay) {
  let run = true;
  let timer;
  const fu = () => {
    if (!run) {
      clearInterval(timer);
      return;
    }
    console.log(run);
    fuc();
    timer = setTimeout(() => {
      fu();
    }, delay);
  };
  fu();
  return () => {
    run = false;
  };
}
let cancel1 = mySetInterVal(() => console.log(1), 1000);

setTimeout(cancel1, 3100);

function mySetIimeOut(fuc, delay) {
  const timer = setInterval(() => {
    fuc();
    clearInterval(timer);
  }, delay);
  return () => clearInterval(timer);
}
let cancel2 = mySetIimeOut(() => console.log(1), 1000);

setTimeout(cancel2, 500);
