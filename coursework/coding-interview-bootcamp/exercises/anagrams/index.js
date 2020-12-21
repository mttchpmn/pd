// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Came up with this all by meself :D
function anagrams(stringA, stringB) {
  const sorted = string =>
    [...string]
      .filter(i => /[a-z]/i.test(i))
      .sort()
      .join("")
      .toLowerCase();

  return sorted(stringA) === sorted(stringB);
}

anagrams("Rail safety", "fairy tales");

module.exports = anagrams;
