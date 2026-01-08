import { v4 as uuidv4 } from "uuid";
import { FatherPassenger } from "./FatherPassenger.js";

export class RegularPassenger extends FatherPassenger {
  constructor(name, amountOfMoney, workPlace, knowsAnAirportEmployee) {
    super(name, amountOfMoney);
    this.workPlace = workPlace;
    this.knowsAnAirportEmployee = knowsAnAirportEmployee;
  }
  buyTicket(price) {
    if (this.amountOfMoney < price) return false;
    this.amountOfMoney -= price;
    return true;
  }
}
