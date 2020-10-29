//Test?Assertion Functions
const eqArrays = function(oneArray, twoArray) {
  for (let i = 0; i < oneArray.length; i++) {
    if (oneArray.length !== twoArray.length || oneArray[i] !== twoArray[i]) {
      return false;
    }  
  }
  return true;
}

const assertArraysEqual = function(eqArrays) {
 if (eqArrays === false) {
  //console.log(`🌈🌈🌈 Assertion Passed`);
  console.log(`😱😱😱 Assertion Failed`);
  } else {
  //console.log(`😱😱😱 Assertion Failed`);
  console.log(`🌈🌈🌈 Assertion Passed`);
    }
}


//create a map function that takes in two arguments: an array to map, a callback function
const map = function(arrayToMap, callback) { //return a new array based on the results of the callback function
  const results = [];
  for (let item of arrayToMap) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//Test
console.log(assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't'])))