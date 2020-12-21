// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My iterative solution
// function fib(n) {
//   let results = [0, 1, 1];

//   for (let i = 3; i <= n; i++) {
//     results[i] = results[i - 1] + results[i - 2];
//   }

//   return results[n];
// }

// Memoize function (from course)
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

// Recursive solution (from course)
function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
