// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`🌈🌈🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  array.slice(1);//console.log(newArray);
};

//tail([5,6,7]);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([5]), 5);
//assertEqual(head([]), 5);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const yoYo = [""];
tail(yoYo);
assertEqual(yoYo.length, 0);
