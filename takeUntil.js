//create takeUntil Fx that takes in 2 parameters: an array, a callback Fx
//takeUntil will return a slice of the array with elements taken from the beginning
  //it should keep going until the callback returns a truthy value
    //the callback should only be provided one value: the item in the array

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item); //need to stop at truthy value
    
    } else if (callback(item) === true) {
      break;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);