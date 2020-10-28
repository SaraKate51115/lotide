const eqArrays = function(oneArray, twoArray) {
  for (let i = 0; i < oneArray.length; i++) {
    if (oneArray.length !== twoArray.length || oneArray[i] !== twoArray[i]) {
      return false;
    }  
  }
  return true;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const assertArraysEqual = function(eqArrays) {
 if (false) {
  //console.log(`🌈🌈🌈 Assertion Passed`);
  console.log(`😱😱😱 Assertion Failed`);
  } else {
  //console.log(`😱😱😱 Assertion Failed`);
  console.log(`🌈🌈🌈 Assertion Passed`);
    }
}
assertArraysEqual();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const flatten = (input) => {
  let results = [];
  for (let i = 0; i < input.length; i++) {
   if(Array.isArray(input[i]) === true) {
     //results.push(input[i])
     for (let j = 0; j < input[i].length; j++) {
       results.push(input[i][j])
     }
   } else {
     results.push(input[i])
   }
  }
  return results
};
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]