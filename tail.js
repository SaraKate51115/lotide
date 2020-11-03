const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let results = []
  if (array.length === 0) {
    return results = [];
  } else if (array.length === 1) {
    results = [];
    return results;
    
  } else {
    return results = array.slice(1);
  }
  //return results;
};

module.exports = assertEqual;
module.exports = tail;


