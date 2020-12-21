// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function steps(n) {
  let spaces = n - 1;

  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(spaces));
    spaces--;
  }
}

module.exports = steps;
