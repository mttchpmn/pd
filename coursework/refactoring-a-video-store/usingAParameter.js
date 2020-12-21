function statement(customer, movies, format = "text") {
  const dispatchTable = {
    text: textStatement,
    html: htmlStatement,
  };
  if (undefined === dispatchTable[format])
    throw new Error(`unknown statement format ${format}`);
  return dispatchTable[format].call();

  function textStatement() {
    let result = `Rental Record for ${customer.name}\n`;

    for (let r of customer.rentals) {
      result += `/t${movieFor(r).title}\t${amountFor(r)}\n`;
    }
    result += `Amount owed is ${totalAmount()}\n`;
    result += `You earned ${totalFrequentRenterPoints()} frequent renter points\n`;

    return result;
  }

  function htmlStatement() {
    let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
    result += "<table>\n";
    for (let r of customer.rentals) {
      result += `    <tr><td>${movieFor(r).title}</td><td>${amountFor(
        r
      )}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${totalAmount()}</em></p>\n`;
    result += `<p>You earned <em>${totalFrequentRenterPoints()}</em> frequent renter points</p>\n`;
    return result;
  }

  function totalFrequentRenterPoints() {
    return customer.rentals
      .map((r) => frequentRenterPointsFor(r))
      .reduce((a, b) => a + b, 0);
  }

  function totalAmount() {
    return customer.rentals.reduce((total, r) => total + amountFor(r), 0);
  }

  function movieFor(rental) {
    return movies[rental.movieID];
  }

  function amountFor(rental) {
    let result = 0;

    // determine amount for each movie
    switch (movieFor(rental).code) {
      case "regular":
        result = 2;
        if (rental.days > 2) {
          result += (rental.days - 2) * 1.5;
        }
        break;
      case "new":
        result = rental.days * 3;
        break;
      case "childrens":
        result = 1.5;
        if (rental.days > 3) {
          result += (rental.days - 3) * 1.5;
        }
        break;
    }

    return result;
  }

  function frequentRenterPointsFor(r) {
    return movieFor(r).code === "new" && r.days > 2 ? 2 : 1;
  }
}
