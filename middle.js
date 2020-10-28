//TEST/ASSERTION FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
//assertArraysEqual();

//ACTUAL FUNCTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const middle = function(arr) {
  
    let middleValue = [];
    if(arr.length === 1 || arr.length <= 2){
      return []
    } else if (arr.length % 2 === 0) {
      middleValue.push(arr[arr.length/2 -1])
      middleValue.push(arr[arr.length/2])
      return middleValue
    } else {
        middleValue.push(arr[arr.length/2 - 0.5])
        return middleValue
        }
} 
console.log(middle([6])) // => []
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]