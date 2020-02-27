/*
This function will return a Fibonacci number at the position specified. 
https://en.wikipedia.org/wiki/Fibonacci_number
*/
function getFibbonacciNumber(sequencePosition){

let firstVar = 0;
let secondVar = 1;

let varArray = [];
varArray.push(firstVar);
varArray.push(secondVar);

function PopulateArray(arrayPosition){
  for(let i = 2; i <= arrayPosition; i++){
    let currentValue = varArray[i - 2] + varArray[i - 1];
    varArray.push(currentValue);
  }
  console.log(varArray);
}

PopulateArray(sequencePosition);
  
return varArray[sequencePosition];
    
}

console.log(getFibbonacciNumber(23));