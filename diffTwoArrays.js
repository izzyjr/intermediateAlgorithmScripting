function diffArray(arr1, arr2) {
    var final = [];
    var array = [];
    var count = 0;
    var newArr = arr1.concat(arr2);
    for(var i = 0; i < newArr.length; i++){
      for(var j = 0; j < newArr.length; j++){
          if(newArr[i] == newArr[j]){
              count++;
          }
      }
       array.push(count);
       if(count == 1){
         final.push(newArr[i]);
     }
     count = 0;
  }
  return final;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);