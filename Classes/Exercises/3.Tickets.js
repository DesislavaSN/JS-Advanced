//3.	Tickets

function tickets(arr, criteria) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  const allTickets = [];

  for (const line of arr) {
    let [destination, price, status] = line.split("|");
    let singleTicket = new Ticket(destination, price, status);
    allTickets.push(singleTicket);
  }

  let sorted;
  if (criteria == "destination") {
    sorted = allTickets.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria == "price") {
    sorted = allTickets.sort((a, b) => a.price - b.price);
  } else if (criteria == "status") {
    sorted = allTickets.sort((a, b) => a.status.localeCompare(b.status));
  }

  // console.log(sorted);
  return sorted;
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

console.log("----");

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
