import { v4 as uuidv4 } from "uuid";

export class Baggage {
  constructor(ownerId,weight,type) {
    this.baggage = uuidv4();
    this.ownerId = ownerId;
    this.weight = weight;
    this.type = type;
  }
}
