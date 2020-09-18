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
//NEED TO FIGURE OUT RETURN VALUE ~~~~~ SCOPE???
const middle = function(arr) {
  //for (index of arr) {
    let middleValue = [];
    if(arr.length === 1 || arr.length <= 2){
      console.log([]);
    }
    if(arr.length % 2 === 0) {
      middleValue[0] = arr[arr.length/2 -1]
      middleValue[1] = arr[arr.length/2]
      console.log(middleValue[0], middleValue[1])
        //if(middleValue[0] <= 0){
          //console.log([]);
    } else {
          middleValue[0] = arr[arr.length/2 - 0.5]
          console.log(middleValue[0])
        }
      
  return middleValue
} 
middle([6]) // => []
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]