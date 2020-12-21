// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My iterative solution
// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return [...str].reduce(
//     (acc, val) => (vowels.includes(val.toLowerCase()) ? (acc += 1) : acc),
//     0
//   );
// }

// My regex solution
function vowels(str) {
  const vowels = str.match(/([aeiou])/gi);
  return vowels ? vowels.length : 0;
}

module.exports = vowels;
