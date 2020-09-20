
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

//assertArraysEqual tests???