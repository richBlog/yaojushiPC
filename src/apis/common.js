// 回到顶部函数
export function top() {
  let timer = null;
  timer = setInterval(() => {
    let ct = document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
    ct -= 30;
    if (ct > 0) {
      //如果与顶部的距离大于零
      window.scrollTo(0, ct); //向上移动10px
    } else {
      clearInterval(timer); //清除计时器
      //如果距离小于等于零
      window.scrollTo(0, 0); //移动到顶部
    }
  }, 10); //隔10ms执行一次前面的function，展现一种平滑滑动效果
};

// 移除某一组元素上面的active
export function removeClass(ment, active) {
  let item = document.querySelectorAll(ment);
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove(active);
  };
};

// 懒加载
export function lazyLoad(el) {
  // 屏幕可视窗口大小
  let screenVisibleHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  // 滚动条到顶部的距离
  let scrollTop = window.pagYoffset || document.documentElement.scrollTop || document.body.scrollTop;

  let bound = el.getBoundingClientRect();

  return bound.top <= screenVisibleHeight + 100;



};
export function checkImgs() {
  const imgs = document.querySelectorAll('.my-photo');
  Array.from(imgs).forEach(el => {
    if (isInSight(el)) {
      loadImg(el);
    }
  })

};
export function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src;
    el.src = source;
  }
};

export default {
  top,
  removeClass,
  lazyLoad
}
