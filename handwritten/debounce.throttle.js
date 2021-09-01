function debounce(fuc, delay) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fuc, delay);
  };
}

function throttle(fuc, delay) {
  let time = 0;
  return () => {
    let now_ = +new Date();
    if (now_ >= time + delay) {
      time = now_ + delay;
      fuc();
    }
  };
}
