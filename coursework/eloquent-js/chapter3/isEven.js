const isEven = function (number) {
  if (number === 1) return false;
  if (number === 0) return true;

  return isEven(number - 2);
};

console.log(isEven(10));
console.log(isEven(999));
console.log(isEven(19));
