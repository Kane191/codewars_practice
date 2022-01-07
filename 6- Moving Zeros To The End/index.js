var moveZeros = function (arr) {
  count = arr.filter(x=> x=== 0).length
  arr = arr.filter(x=>{return x !== 0})
  for (i = 0; i < count; i++){
    arr.push(0)
  }
  return(arr)
}
