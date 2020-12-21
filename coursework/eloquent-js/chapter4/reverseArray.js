function reverseArray(arr) {
  const result = [];
  while (arr.length > 0) result.push(arr.pop());

  return result;
}

const reverseArrayInPlace = (arr) => {
  let idx = 0;
  let counter = arr.length;

  while (counter > 0) {
    const cur = arr.pop();
    arr.splice(idx, 0, cur);
    counter--;
    idx++;
  }

  return arr;
};

const test = [1, 2, 3, 4, 5];

console.log(reverseArrayInPlace(test));
