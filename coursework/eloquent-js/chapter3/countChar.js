// function countChar(str, char) {
//   let count = 0;

//   for (c of str) {
//     if (c === char) count++;
//   }

//   return count;
// }

const countChar = (str, char) =>
  [...str].reduce((acc, cur) => acc + (cur === char ? 1 : 0), 0);

console.log(countChar("Small Planet", "l"));
