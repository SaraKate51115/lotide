// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`🌈🌈🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
