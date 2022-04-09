// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  const arr = []
  this.forEach(item => {
    if (cb(item)) {
      arr.push(item)
    }
  })
  return arr
};
