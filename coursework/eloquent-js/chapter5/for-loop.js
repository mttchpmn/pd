// Recursive solution
const loop = (value, testFn, updateFn, bodyFn) => {
  if (!testFn(value)) return;

  bodyFn(value);

  value = updateFn(value);

  return loop(value, testFn, updateFn, bodyFn);
};

// Alternative solution (From Author)
function loop2(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
