function pairElement(str) {
  var dnaStrand = [];
  var dnaMap = {A:"T", T:"A", C:"G", G:"C"};
  for(var i = 0; i < str.length; i++){
      dnaStrand.push([str[i], dnaMap[str[i]]]);// I guess Objects can be accessed with bracket notation.
  }
     console.log(dnaStrand);

}

pairElement("GCG");
// var strArray = str.split(""); //output['g','c','g']
//   for(var i = 0; i < strArray.length; i++){
//       if (strArray[i] === "A"){
//           dnaStrand.push(["A", "T"]);
//       } else if(strArray[i] === "T"){
//           dnaStrand.push(["T", "A"]);
//       } else if(strArray[i] === "G"){
//           dnaStrand.push(["G", "C"]);
//       } else if(strArray[i] === "C"){
//           dnaStrand.push(["C", "G"]);
//       }
//   }
//   console.log(dnaStrand);
    
    
    
    
    