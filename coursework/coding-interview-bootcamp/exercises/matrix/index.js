// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Solution - following vid for initial guidance, building the rest myself
function matrix(n) {
  // Build response skeleton
  const results = [];
  for (let i = 0; i < n; i++) results.push([]);

  // What number are we pushing into the array
  let counter = 1;

  // Track the starting and ending cols and rows
  let [startCol, endCol] = [0, n - 1];
  let [startRow, endRow] = [0, n - 1];

  // Iterate through matrix
  while (startCol <= endCol && startRow <= endRow) {
    // Top side
    for (let col = startCol; col <= endCol; col++) {
      results[startRow][col] = counter;
      counter++;
    }
    startRow++;

    // Right side
    for (let row = startRow; row <= endRow; row++) {
      results[row][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom side
    for (let col = endCol; col >= startCol; col--) {
      results[endRow][col] = counter;
      counter++;
    }
    endRow--;

    // Left Side
    for (let row = endRow; row >= startRow; row--) {
      results[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}
matrix(3);

module.exports = matrix;
