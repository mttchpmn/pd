function range(start, end, step = 1) {
  const sign = Math.sign(step);
  const e = end * sign;
  const result = [];

  for (let s = start; sign === -1 ? s >= e : s <= e; s += step) {
    result.push(s);
  }

  return result;
}

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
console.log(range(1, 10, -5));

const test = range(1, 10);
const result = sum(test);

console.log(result);
