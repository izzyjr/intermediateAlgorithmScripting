
function whatIsInAName(collection, source) {

  var arr = [];
  var sourceKeys = Object.keys(source);
  for(var collectionItem = 0; collectionItem < collection.length; collectionItem++){
    var keysFlag = true;
    for(var sourceKey = 0; sourceKey < sourceKeys.length && keysFlag; sourceKey++){
      if(collection[collectionItem].hasOwnProperty(sourceKeys[sourceKey])){
        if (collection[collectionItem][sourceKeys][sourceKey] != source[sourceKeys[sourceKey]]){
          keysFlag = false;
        }
      } else{
        keysFlag = false;
      }
    }
    if (keysFlag){
    arr.push(collection[collectionItem]);
    }
  }
  console.log(arr);
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });