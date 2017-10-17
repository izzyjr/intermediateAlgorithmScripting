
function sumAll(arr) {
var max = Math.max(arr[0], arr[1]);
var min = Math.min(arr[0], arr[1]);
var count = 0;  
  
  for(var i = min; i <= max; i++){
    count = count + i;
  }
  return count;
  
}
sumAll([1, 4]);