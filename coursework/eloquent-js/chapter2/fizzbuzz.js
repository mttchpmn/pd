let counter = 1;

const byNum = (a, b) => a % b === 0;

while (counter < 101) {
	  byNum(counter, 3) && byNum(counter, 5)
	    ? console.log("FIZZBUZZ")
	    : byNum(counter, 3)
	    ? console.log("FIZZ")
	    : byNum(counter, 5)
	    ? console.log("BUZZ")
	    : console.log(counter);

	  counter++;
}
