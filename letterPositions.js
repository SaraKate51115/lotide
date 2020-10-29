const eqArrays = function(oneArray, twoArray) {
  for (let i = 0; i < oneArray.length; i++) {
    if (oneArray.length !== twoArray.length || oneArray[i] !== twoArray[i]) {
      return false;
    }  
  }
  return true;
}

const assertArraysEqual = function(eqArrays) {
 if (false) {
  //console.log(`🌈🌈🌈 Assertion Passed`);
  console.log(`😱😱😱 Assertion Failed`);
  } else {
  //console.log(`😱😱😱 Assertion Failed`);
  console.log(`🌈🌈🌈 Assertion Passed`);
    }
}
const letterPositions = function(sentence) {
  const results = {};
 
  for (let i = 0; i < sentence.length; i++) {//loop over sentence
   results[sentence[i]] = []; //return empty array for each letter
   if (sentence.includes(sentence[i])) {
    results[sentence[i]].push(i) //push index to empty array
   }
  }
  return results;
}

console.log(letterPositions('hello'));

//Funtion is returning only one position for letters that appear twice. How do I fix this?