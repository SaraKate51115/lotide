//TEST/ASSERTION FUNCTION
const eqObjects = function(object1, object2) {

  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    //return true;
    for (let key in object1) {//loop through keys returned for one of 
      if(object1[key] === object2[key]) { //compare both objects values for that key 
        return true;
      }
      return false;
    }
  }
  return true;
}
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(eqObjects) {
  // Implement me!
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(eqObjects)}`);
  if (eqObjects === false) {
    console.log(`😱😱😱 Assertion Failed`);
    } else if (eqObjects === true) {
    console.log(`🌈🌈🌈 Assertion Passed`);
      } 
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, abc)));


