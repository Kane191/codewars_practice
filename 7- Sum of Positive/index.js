function positiveSum(arr) {
  sum = 0;
  n_arr = arr.filter( x => {return x > 0});
  n_arr.map(x => {return sum = sum + x});
  return sum;
}
