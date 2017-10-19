function myReplace(str, before, after) {
  var array = str.split(' ');
  for(var i = 0; i < array.length; i++){
      if(array[i] == before){
          var target = array[i].charAt(0);
          if(target.charCodeAt(0) < 97){
                after = after.split('');
                after[0] = after[0].toUpperCase();
                after = after.join('');
                array.splice(i, 1);
                array.splice(i, 0, after);
                console.log(after);
          }else{
          array.splice(i, 1);
          array.splice(i, 0, after);
          }
      }
  }
  str = array.join(' ');
  console.log(str);
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


