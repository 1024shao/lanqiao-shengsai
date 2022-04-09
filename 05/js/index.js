let rollTime; // 定义定时器变量用来清除定时器
let time = 0; // 转动次数
let speed = 300; // 转动时间间隔
let times; // 总转动次数

// 开始按钮点击事件后开始抽奖
$("#start").on("click", function () {
  $("#award").text(""); //清空中奖信息
  times = parseInt(Math.random() * (20 - 30 + 1) + 20, 10); // 定义总转动次数，随机20-30次
  rolling();
});

const lis = document.querySelectorAll('.ul li')
const start = document.querySelector('#award')
const arrList = Array.from(lis)
let curActive = null
// TODO：请完善此函数
function rolling () {
  let cur = time % 8 // 0 - 7
  const clear = () => {
    arrList.forEach(item => item.classList.remove('active'))
  }
  if (cur <= 2) {
    clear();
    arrList[cur].classList.add('active')
    curActive = arrList[cur]
  }
  else if (cur == 3) {
    clear();
    arrList[5].classList.add('active')
    curActive = arrList[5]
  }
  else if (cur >= 4 && cur != 7) {
    clear();
    arrList[12 - cur].classList.add('active')
    curActive = arrList[12 - cur]
  }
  else if (cur === 7) {
    clear();
    arrList[3].classList.add('active')
    curActive = arrList[3]
  }
  if (time == times) {
    start.innerHTML = '恭喜您抽中了' + curActive.innerHTML + '!!!'
  }

  time++; // 转动次数加1
  clearTimeout(rollTime);
  rollTime = setTimeout(() => {
    window.requestAnimationFrame(rolling); // 进行递归动画
  }, speed);

  // time > times 转动停止
  if (time > times) {
    clearInterval(rollTime);
    time = 0;
    return;
  }
}
