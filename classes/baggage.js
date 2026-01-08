import { v4 as uuidv4 } from "uuid";

export class Baggage {
  constructor(ownerName, weight, type) {
    this.baggage = uuidv4();
    this.ownerName = ownerName;
    this.weight = weight;
    this.type = type;
  }
}
