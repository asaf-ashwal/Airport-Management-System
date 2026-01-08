import { v4 as uuidv4 } from "uuid";
import { FatherPassenger } from "./FatherPassenger.js";

export class StudentPassenger extends FatherPassenger {
  constructor(name, amountOfMoney, schoolOrUniversityName) {
    super(name, amountOfMoney);
    this.schoolOrUniversityName = schoolOrUniversityName;
  }
  buyTicket(price) {
    if (this.amountOfMoney < price) return false;
    this.amountOfMoney -= price;
    return true;
  }
}
