import { v4 as uuidv4 } from "uuid";

export class RegularTicket {
  constructor(price, ownerName) {
    // (Math.random*1000).toFixed(0)
    
    this.ticketNumber = uuidv4();
    this.price = price;
    this.ownerName = ownerName;
  }
}
