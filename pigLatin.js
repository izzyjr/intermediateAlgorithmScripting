
function translatePigLatin(str) {
    var vocals = ['a', 'e', 'i', 'o', 'u'];
    str = str.split('');
    var array = [];
    var ay = ['a','y'];
    var way = ['w','a','y'];
    
    for(var i = 0; i < vocals.length; i++){
        var target = str.indexOf(vocals[i]);
        if(target !== -1){
            array.push(target);
        }
    }
    array = array.sort(function(a, b){
        return b - a;
    });
    var first = (array.length) - 1;
    if(array[first] > 0){
        var seg = str.splice(0, array[first]);
        var result = seg.concat(ay);
        result = result.join('');
        str.push(result);
        str = str.join('');
    }else{
        str = str.concat(way).join('');
    }
    console.log(str);
}
translatePigLatin("algorithm");