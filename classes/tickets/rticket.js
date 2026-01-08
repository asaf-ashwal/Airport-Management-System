import { v4 as uuidv4 } from "uuid";

export class RegularTicket {
  constructor(price, ownerName) {
    this.ticketNumber = uuidv4();
    this.price = price;
    this.ownerName = ownerName;
  }
}
