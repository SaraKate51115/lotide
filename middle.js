//TEST/ASSERTION FUNCTIONS
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//FUNCTION IMPLEMENTATION
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

module.exports = eqArrays;
module.exports = assertArraysEqual;
module.exports = middle;
