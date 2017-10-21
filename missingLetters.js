
    function fearNotLetter(str) {
    
    var array = [];
    var missing =[];
    var count = 0;
    for(var i = 0; i < str.length; i++){
        array.push(str.charCodeAt(i));
    }
    for(var j = 1; j < array.length; j++){
        var start = array[0];
        if(array[j] - start == j){
            count++;
        }
    }
    missing.push(array[count] + 1);
    var final = String.fromCharCode(missing[0]);

    if(missing[0] > array[array.length - 1]){
        console.log("undefined");
    }else{
        console.log(final);
    }
}





fearNotLetter("abce");
fearNotLetter("bcd");
fearNotLetter("yz")