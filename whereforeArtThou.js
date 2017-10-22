
function whatIsInAName(collection, source) {

  var arr = [];
  var sourceKeys = Object.keys(source);
  for(var i = 0; i < collection.length; i++){
    var keysFlag = true;
    for(var j = 0; j < sourceKeys.length; j++){
      if(collection[i].hasOwnProperty(sourceKeys[j])){
        if(collection[i][sourceKeys[j]] != source[sourceKeys[j]]){
          keysFlag = false;
        }else{
          keysFlag = true;
        }
      }
    }
    if(keysFlag){
        arr.push(collection[i]);
      }
  }
  console.log(arr);
  // console.log(sourceKeys.length);
  // console.log(sourceKeys[0]);
  // console.log(source);
  // console.log(collection[0][sourceKeys[0]] + "!=" + source[sourceKeys[0]]);
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });


// for(var collectionItem = 0; collectionItem < collection.length; collectionItem++){
//     var keysFlag = true;
//     for(var sourceKey = 0; sourceKey < sourceKeys.length && keysFlag; sourceKey++){
//       if(collection[collectionItem].hasOwnProperty(sourceKeys[sourceKey])){
//         if (collection[collectionItem][sourceKeys][sourceKey] != source[sourceKeys[sourceKey]]){
//           keysFlag = false;
//         }
//       } else{
//         keysFlag = false;
//       }
//     }
//     if (keysFlag){
//     arr.push(collection[collectionItem]);
//     }
//   }