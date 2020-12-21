function statement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;

  for (let r of customer.rentals) {
    frequentRenterPoints += frequentRenterPoints(r);
  }
  for (let r of customer.rentals) {
    result += `/t${movieFor(r).title}\t${amountFor(r)}\n`;
  }
  for (let r of customer.rentals) {
    totalAmount += amountFor(r);
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
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

function frequentRenterPoints(r) {
  return movieFor(r).code === "new" && r.days > 2 ? 2 : 1;
}
