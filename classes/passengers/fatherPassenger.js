import { v4 as uuidv4 } from "uuid";

export class FatherPassenger {
  constructor(name, amountOfMoney) {
    this.name = name;
    this.idNumber = uuidv4();
    this.amountOfMoney = amountOfMoney;

  }
}
