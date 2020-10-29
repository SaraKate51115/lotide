//TES/ASSERTION FUNCTIONS
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
  console.log(`😱😱😱 Assertion Failed`);
  } else {
  console.log(`🌈🌈🌈 Assertion Passed`);
    }
}

// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  const results = [];
  for (let key in object) { //selects keys
    
    if(callback(object[key]) === true) {
      results.push(key);
      break;
    }
  }
  return results;
};

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const results1 = findKey(object, x => x.stars === 1)
console.log(results1);

//TES CODE
console.log(assertArraysEqual(eqArrays(results1, ['Blue Hill'])));
console.log(assertArraysEqual(eqArrays(results1, ['Nope'])));