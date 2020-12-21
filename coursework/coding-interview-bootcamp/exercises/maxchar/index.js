// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  const val = Object.keys(map).reduce((acc, cur) =>
    map[acc] > map[cur] ? acc : cur
  );
  return val;
}

maxChar("apple 1231111");

module.exports = maxChar;
