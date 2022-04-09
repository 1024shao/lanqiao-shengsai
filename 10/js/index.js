let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
let carList = []
let showList = []
let listGroup = null
const pagination = document.querySelector('#pagination')
pagination.style.marginTop = '20px'
const list = document.querySelector('#list')
console.log(list)


const getCurrentList = () => {
  let start = (pageNum - 1) * 5
  showList = carList.slice(start, start + 5)
  show()
}

axios.get('js/carlist.json').then(res => {
  carList = res.data
  maxPage = Math.ceil(carList.length / 5)
  getCurrentList()
})

const show = () => {
  if (listGroup == null) {
    listGroup = document.createElement('div')
    listGroup.className = 'list-group'
    list.appendChild(listGroup)
  } else {
    list.removeChild(listGroup)
    listGroup = document.createElement('div')
    listGroup.className = 'list-group'
    list.appendChild(listGroup)
  }

  showList.forEach(item => {
    const a = document.createElement('a')
    a.className = 'list-group-item list-group-item-action'
    a.href = "#"
    const div = document.createElement('div')
    div.className = 'd-flex w-100 justify-content-between'
    const h5 = document.createElement('h5')
    h5.className = 'mb-1'
    h5.innerHTML = item.name
    const small = document.createElement('small')
    small.innerHTML = item.price + '元'
    div.appendChild(h5)
    div.appendChild(small)
    const p = document.createElement('p')
    p.className = "mb-1"
    p.innerHTML = item.description
    a.appendChild(div)
    a.appendChild(p)
    listGroup.appendChild(a)
  })
  showPagination()
}
const showPagination = () => {
  pagination.innerHTML = '共 ' + maxPage + ' 页,当前 ' + pageNum + '页'
}

// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  if (pageNum > 1) {
    pageNum--
    getCurrentList()
    if (pageNum == 1) {
      prev.classList.add('disabled')
    } else {
      prev.classList.remove('disabled')
    }
    if (pageNum != maxPage) {
      next.classList.remove('disabled')
    }
  }
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码

  if (pageNum < maxPage) {
    pageNum++
    getCurrentList()
    if (pageNum === maxPage) {
      next.classList.add('disabled')
    } else {
      next.classList.remove('disabled')
    }
    if (pageNum != 1) {
      prev.classList.remove('disabled')
    }
  }
};
