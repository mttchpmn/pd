// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My solution :D
function capitalize(str) {
  return [...str].reduce(
    (acc, val, idx, src) =>
      src[idx - 1] === " " || idx === 0
        ? (acc += val.toUpperCase())
        : (acc += val),
    ""
  );
}

module.exports = capitalize;
