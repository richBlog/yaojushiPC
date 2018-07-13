const element = function (e) {
  // 获取当前浮动的导航
  return document.querySelector(e);
}

// 获取浏览器滚动的距离
const top = () => {
  return document.documentElement.scrollTop || document.body.scrollTop;
}


// 获取对应楼层距离顶部距离
const floor = (elist) => {
  let list = [];
  for (let i of elist) {
    list.push(element(i).offsetTop - 200);
  }
  return list;
}


// 节流 优化scroll造成高频率触发的事件
const debounce = (fn, wait, maxTimelong) => {
  let time = null;
  // 获取第一次触发scroll事件的时间
  let startTime = Date.parse(new Date());

  return () => {
    if (time !== null) clearTimeout(time);
    // 获取第二次触发scroll事件的时间
    let curTime = Date.parse(new Date());

    // 对比两次时间间隔是否大于我们自定义的间隔时间   1、为真时候直接调用要触发的事件 2、为假的时候等待自定义的时间再调用要触发的事件
    if (curTime - startTime >= maxTimelong) {
      fn();
      startTime = curTime;
    } else {
      time = setTimeout(fn, wait);
    }
  };
}

// 电梯的隐藏和显示
const isShow = (top, list, last) => {
  if (top > list[0] - 300 && top < last - 300) {
    return true;
  } else {
    return false;
  }
}


export default {
  element,
  top,
  floor,
  isShow,
  debounce
}
