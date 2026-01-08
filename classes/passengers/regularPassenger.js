import { v4 as uuidv4 } from "uuid";

export class RegularPassenger {
  constructor(name, amountOfMoney, workPlace, knowsAnAirportEmployee) {
    this.name = name;
    this.idNumber = uuidv4();
    this.amountOfMoney = amountOfMoney;
    this.workPlace = workPlace;
    this.knowsAnAirportEmployee = knowsAnAirportEmployee;
  }
  buyTicket(price) {
    if (this.amountOfMoney < price) return false;
    this.amountOfMoney -= price;
    return true;
  }
}
