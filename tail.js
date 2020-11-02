// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`🌈🌈🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const yoYo = [""];
tail(yoYo);
assertEqual(yoYo.length, 0);

const yo = ["yo"];
tail(yoYo);
assertEqual(yo.length, 0);
