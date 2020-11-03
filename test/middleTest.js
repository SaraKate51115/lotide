const assert = require('chai').assert;
const middle = require('../middle');

//TEST CODE
describe("#middle", () => {
  it('arrays with only one or two elements should return an empty array', () => {
    assert.deepEqual(middle([6]), [])
  });
  it("arrays with an odd number of elements shoould return an array containing the single middle element", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("arrays with an even number of elements should return an array with the two middle elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
})