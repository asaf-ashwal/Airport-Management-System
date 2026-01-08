import { v4 as uuidv4 } from "uuid";

export class VIPTicket {
  constructor(price, ownerName) {
    this.ticketNumber = uuidv4();
    this.price = price;
    this.ownerName = ownerName;
    this.benefitsList = ["Free alcohol", "Free food", "Hot towels"];
  }
}
