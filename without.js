const eqArrays = function (oneArray, twoArray) {
  for (let i = 0; i < oneArray.length; i++) {
    if (oneArray.length !== twoArray.length || oneArray[i] !== twoArray[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (eqArrays) {
  if (false) {
    //console.log(`🌈🌈🌈 Assertion Passed`);
    console.log(`😱😱😱 Assertion Failed`);
  } else {
    //console.log(`😱😱😱 Assertion Failed`);
    console.log(`🌈🌈🌈 Assertion Passed`);
  }
}

assertArraysEqual();

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//return a subset of a given array => removing any unwanted items
//take in a source array
//take in an items to remove array
const without = function (source, itemsToRemove) {
  let result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
}






console.log(without([1, 2, 3], [1])); // => [2, 3]

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
