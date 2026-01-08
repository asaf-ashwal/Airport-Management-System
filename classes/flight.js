import { RegularTicket } from "./tickets/rticket.js";
import { VIPTicket } from "./tickets/vipT.js";

export class Flight {
  constructor(
    name,
    airline,
    flightNumber,
    maximumNumberOfpassengers,
    regularTicketPrice,
    VIPTicketPrice
  ) {
    this.name = name;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maximumNumberOfpassengers = maximumNumberOfpassengers;
    this.regularTicketPrice = regularTicketPrice;
    this.VIPTicketPrice = VIPTicketPrice;
    this.ticketsList = [];
  }

  buyRTicket(passengers) {
    const isFull = this.IsAvelabolSits();
    if (isFull.regular === false) {
      console.log("regular is full");
      return false;
    }
    let price = this.regularTicketPrice;
    if (passengers.schoolOrUniversityName)
      price = this.regularTicketPrice - this.regularTicketPrice * 0.1;
    else if (passengers.knowsAnAirportEmployee)
      price = this.regularTicketPrice - this.regularTicketPrice * 0.2;
    const buy = passengers.buyTicket(price);
    if (!buy) {
      console.log("Passengers do not have egnoph mony for regular ticket.");
      return false;
    }
    const ticket = new RegularTicket(price, passengers.name);
    this.ticketsList.push(ticket);
    return true;
  }

  buyVipTicket(passengers) {
    const isFull = this.IsAvelabolSits();
    if (isFull.vip === false) {
      console.log("Vip is full");
      return false;
    }
    let price = this.VIPTicketPrice;
    if (passengers.knowsAnAirportEmployee)
      price = this.regularTicketPrice - this.VIPTicketPrice * 0.15;
    const buy = passengers.buyTicket(price);
    if (!buy) {
      console.log("Passengers do not have egnoph mony for vip ticket.");
      return false;
    }
    const ticket = new VIPTicket(price, passengers.name);
    this.ticketsList.push(ticket);
    return true;
  }
  IsAvelabolSits() {
    if (this.ticketsList.length >= this.maximumNumberOfpassengers) {
      console.log("Flight is full");
      return false;
    }
    let res = { vip: 0, regular: 0 };
    this.ticketsList.forEach((t) => {
      if (t instanceof RegularTicket) res.regular += 1;
      else if (t instanceof VIPTicket) {
        res.vip += 1;
      }
    });

    return {
      vip: res.vip >= this.maximumNumberOfpassengers * 0.1 ? false : true,
      regular:
        res.regular >= this.maximumNumberOfpassengers * 0.9 ? false : true,
    };
  }
}
