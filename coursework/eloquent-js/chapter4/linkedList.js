// Recursive function
const arrayToList = (arr, rest = null) => {
  if (!arr.length) return rest;

  const value = arr.pop();
  const node = { value, rest };

  return arrayToList(arr, node);
};

// More readable version
// const listToArray = (list, result = []) => {
//   if (!list) return result;

//   return listToArray(list.rest, [...result, list.value]);
// };

// One liner
const listToArray = (list, result = []) =>
  list ? listToArray(list.rest, [...result, list.value]) : result;

// Helper function
const prepend = (value, rest) => ({ value, rest });

const nth = (list, idx, count = 0) =>
  count === idx ? list.value : nth(list.rest, idx, ++count);

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
