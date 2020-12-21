// This could be in its own module, but included here for simplicity
class Customer {
  constructor(data, movies) {
    this._data = data;
    this._movies = movies;
  }

  get name() {
    return this._data.name;
  }

  get rentals() {
    return this._data.rentals.map((r) => new Rental(r, this._movies));
  }

  get frequentRenterPoints() {
    return this.rentals
      .map((r) => r.frequentRenterPoints)
      .reduce((a, b) => a + b, 0);
  }

  get amount() {
    return this.rentals.reduce((total, r) => total + r.amount, 0);
  }
}

class Rental {
  constructor(data, movies) {
    this._data = data;
    this._movies = movies;
  }

  get days() {
    return this._data.days;
  }

  get movieID() {
    return this._data.movieID;
  }

  get movie() {
    return this._movies[this.movieID];
  }
  get frequentRenterPoints() {
    return this.movie.code === "new" && this.days > 2 ? 2 : 1;
  }

  get amount() {
    let result = 0;

    // determine amount for each movie
    switch (this.movie.code) {
      case "regular":
        result = 2;
        if (this.days > 2) {
          result += (this.days - 2) * 1.5;
        }
        break;
      case "new":
        result = this.days * 3;
        break;
      case "childrens":
        result = 1.5;
        if (this.days > 3) {
          result += (this.days - 3) * 1.5;
        }
        break;
    }

    return result;
  }
}

function htmlStatement(customerArg, movies) {
  const customer = new Customer(customerArg, movies);
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
  result += "<table>\n";
  for (let r of customer.rentals) {
    result += `  <tr><td>${r.movie.title}</td><td>${r.amount}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${customer.amount}</em></p>\n`;
  result += `<p>You earned <em>${customer.frequentRenterPoints}</em> frequent renter points</p>\n`;
  return result;
}

function statement(customerArg, movies) {
  const customer = new Customer(customerArg, movies);

  let result = `Rental Record for ${customer.name}\n`;

  for (let r of customer.rentals) {
    result += `/t${r.movie.title}\t${r.amount}\n`;
  }
  result += `Amount owed is ${customer.amount}\n`;
  result += `You earned ${customer.frequentRenterPoints} frequent renter points\n`;

  return result;
}
