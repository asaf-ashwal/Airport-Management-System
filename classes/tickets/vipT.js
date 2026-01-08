import { RegularTicket } from "./rticket.js";

export class VIPTicket extends RegularTicket{
  constructor(price, ownerName) {
    super(price,ownerName)
    this.benefitsList = ["Free alcohol", "Free food", "Hot towels"];
  }
}
