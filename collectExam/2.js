function throttle(fuc, delay) {
  let time = 0;
  return function () {
    let cur = +new Date();
    if (cur >= time + delay) {
      time = cur;
      fuc();
    }
  };
}

function debounce(fuc, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fuc, delay);
  };
}