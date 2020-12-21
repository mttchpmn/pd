const array1 = [[1, 2, 3], [4, 5], [6]];
const array2 = [
  [1, 2, 3],
  [[4, 5], 6],
  [[7], [8, 9]],
];

const flatten = (arr, done = false) => {
  if (done) return arr;

  done = arr.every((val) => typeof val !== "object");
  arr = arr.reduce(
    (acc, val) => (val.length ? [...acc, ...val] : [...acc, val]),
    []
  );

  return flatten(arr, done);
};

console.log(flatten(array1));
// → [1, 2, 3, 4, 5, 6]
console.log(flatten(array2));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
