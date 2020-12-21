function movieFor(rental, movies) {
  return movies[rental.movieID];
}

function totalFrequentRenterPoints(customer, movies) {
  return customer.rentals
    .map((r) => frequentRenterPointsFor(r, movies))
    .reduce((a, b) => a + b, 0);
}

function totalAmount(customer, movies) {
  return customer.rentals.reduce((total, r) => total + amountFor(r, movies), 0);
}

function amountFor(rental, movies) {
  let result = 0;

  // determine amount for each movie
  switch (movieFor(rental, movies).code) {
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

function frequentRenterPointsFor(rental, movies) {
  return movieFor(rental, movies).code === "new" && r.days > 2 ? 2 : 1;
}

function statement(customer, movies) {
  let result = `Rental Record for ${customer.name}\n`;

  for (let r of customer.rentals) {
    result += `/t${movieFor(r, movies).title}\t${amountFor(r)}\n`;
  }
  result += `Amount owed is ${totalAmount()}\n`;
  result += `You earned ${totalFrequentRenterPoints()} frequent renter points\n`;

  return result;
}

function htmlStatement(customer, movies) {
  const amount = () => totalAmount(customer, movies);
  const frequentRenterPoints = () =>
    totalFrequentRenterPoints(customer, movies);
  const movie = (aRental) => movieFor(aRental, movies);
  const rentalAmount = (aRental) => amountFor(aRental, movies);

  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
  result += "<table>\n";
  for (let r of customer.rentals) {
    result += `  <tr><td>${movie(r).title}</td><td>${rentalAmount(
      r
    )}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${amount()}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints()}</em> frequent renter points</p>\n`;

  return result;
}
