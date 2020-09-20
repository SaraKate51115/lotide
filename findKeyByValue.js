const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`🌈🌈🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//scan the object and return the first key with the given value
const findKeyByValue = function(bestTVShowsByGenre, show) {
 //loop over tv show genres
 for(let genre in bestTVShowsByGenre) {
   if (Object.keys(bestTVShowsByGenre[genre].includes(show))) {
     //let genreOfShow = show
     //console.log(genreOfShow)
     return Object.keys(bestTVShowsByGenre).find(genre => bestTVShowsByGenre[genre] === show);
   }
  
  
 }
}
      


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))//, "drama";
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))//, undefined)
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))