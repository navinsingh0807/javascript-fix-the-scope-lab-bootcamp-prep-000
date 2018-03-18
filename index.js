var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat'
  return animal
}

function add2(n) {
  

  // Feel free to move things around!
   var two = 2
   return (n + two)
}
function LongestWord(sen) { 

  var words = sen.split(' ');
  console.log(words.length);
  for(var i = 0; i <= words.length;i++){
      var len = words[i].length;
      var wordsLength = [];
      wordsLength.push(len);
  }
  
  var z = 0;
  var longestWord;
  for(var j=0;j<=wordsLength.length;j++){
       
       if(wordsLength[j] > z){
           longestWord = wordslength[j]
           z = longestWord
       }
  }
  
  sen = words[longestWord]
  return sen; 
         
}
   
// keep this function call here 
LongestWord("I love Dogs");                            















                            
                            
                            
  



var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
function()
console.log(funkyFunction)
var theFunk = funkyFunction
