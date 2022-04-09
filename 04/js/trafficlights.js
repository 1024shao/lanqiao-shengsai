// TODO：完善此函数 显示红色颜色的灯
function red () {
  const defaultDiv = document.querySelector('#defaultlight')
  defaultDiv.style.display = 'none'
  const redDiv = document.querySelector('#redlight')
  redDiv.style.display = 'inline-block'
}

// TODO：完善此函数  显示绿色颜色的灯
function green () {
  const redDiv = document.querySelector('#redlight')
  redDiv.style.display = 'none'
  const greenDiv = document.querySelector('#greenlight')
  greenDiv.style.display = 'inline-block'
}

// TODO：完善此函数
function trafficlights () {
  window.addEventListener('load', () => {
    setTimeout(() => {
      red()
      setTimeout(() => {
        green()
      }, 3000);
    }, 3000);
  })
}

trafficlights();
