const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

//TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const yoYo = [];
// tail(yoYo);
// assertEqual(yoYo.length, 0);

// const word = ["word"];
// tail(word);
// assertEqual(word.length, 0);

//
describe("#tail", () => {
  it('does not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3, 'the lenght of the original array stays the same');
  });
  it("an empty array should yield an empty array for its tail", () => {
    const yoYo = [];
    tail(yoYo);
    assert.deepEqual(yoYo.length, 0);
  });
  it("an array with only one element should yield an empty array for its tail", () => {
    const num = ['one'];
    tail(num);
    assert.deepEqual(num.length, 0);
  });
})