// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`🌈🌈🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const counts = {}; //object for letter => count mapping
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i);
    count = counts[letter];
    counts[letter] = count ? count + 1 : 1; //figure out what this is doing???
 }
    
    for (const letter in counts) {
      if (letter !== ' ') {
        console.log(`${letter}: ${counts[letter]}`); 
      }
    }
  };

countLetters("lighthouse in the house");
