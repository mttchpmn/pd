// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My recursive solution
function pyramid(n, row = 0, col = 0, level = "") {
  // base case - return if complete
  if (row === n) return;

  // Find width / no. of columns
  const width = n * 2 - 1;
  // work out our middle index
  const midpoint = Math.floor(width / 2);

  // print row if complete
  if (level.length === width) {
    console.log(level);
    return pyramid(n, row + 1, 0, "");
  }

  // return column
  const lo = midpoint - row;
  const hi = midpoint + row;

  const add = col >= lo && col <= hi ? "#" : " ";
  pyramid(n, row, col + 1, level + add);
}

// My  original solution
// function pyramid(n) {
//   // Find width / no. of columns
//   const width = n * 2 - 1;
//   // work out our middle index
//   const midpoint = Math.floor(width / 2);

//   // Iterate through each row
//   for (let row = 0; row < n; row++) {
//     let str = "";

//     // Iterate through columns
//     for (let col = 0; col < width; col++) {
//       // Find max and min indices for hashes
//       const lowIndex = midpoint - row;
//       const highIndex = midpoint + row;

//       if (col >= lowIndex && col <= highIndex) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// }

pyramid(3);
module.exports = pyramid;
