function uniteUnique(arr) {
  
  var final = [];
  for(var i = 0; i < arguments.length; i++){
      for(var j = 0; j < arguments[i].length; j++){
          if(final.indexOf(arguments[i][j]) < 0){
            final.push(arguments[i][j]);
          }  
      }
  }
  
  
  
  
  
  console.log(final);
  
  
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
