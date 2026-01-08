import { Flight } from "./flight.js";

export default class Airport {
  constructor() {
    this.flights = this.creatFlights();
  }
  creatFlights() {
    const flight1 = new Flight(
      "argentina flight",
      "izraer",
      "1",
      500,
      1000,
      1500
    );
    const flight2 = new Flight("uk flight", "izraer", "2", 200, 1000, 1500);
    const flight3 = new Flight("usa", "izraer", "3", 400, 1000, 1500);
    return [flight1, flight2, flight3];
  }
}
