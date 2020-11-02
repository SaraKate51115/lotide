//TEST/ASSERTION FUNCTIONS
const eqArrays = require('./eqArrays');

//FUNCTION IMPLEMENTATION
const assertArraysEqual = function(eqArrays) {
 if (eqArrays === false) {
  //console.log(`🌈🌈🌈 Assertion Passed`);
  console.log(`😱😱😱 Assertion Failed`);
  } else {
  //console.log(`😱😱😱 Assertion Failed`);
  console.log(`🌈🌈🌈 Assertion Passed`);
    }
}
assertArraysEqual();

module.exports = eqArrays;
module.exports = assertArraysEqual
