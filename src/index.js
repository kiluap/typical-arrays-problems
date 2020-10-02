
exports.min = function Min (array) {
  if(Min.arguments.length == 0 || array.length == 0) return 0;
  let min = array[0];
  for (let i = 1; i < array.length; i++){
    if(array[i] < min) min = array[i];
  }
  return min;
}

exports.max = function Max (array) {
  if(Max.arguments.length == 0 || array.length == 0) return 0;
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if(array[i] > max) max = array[i];
  }
  return max;
}

exports.avg = function Avg (array) {
  if(Avg.arguments.length == 0 || array.length == 0) return 0;
  let sum = 0;
  let n = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    n++
  }
  return sum / n;
}
