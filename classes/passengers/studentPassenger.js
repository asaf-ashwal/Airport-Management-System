import { v4 as uuidv4 } from 'uuid';

export class StudentPassenger {
  constructor(name, amountOfMoney, schoolOrUniversityName) {
    this.name = name;
    this.idNumber = uuidv4();
    this.amountOfMoney = amountOfMoney;
    this.schoolOrUniversityName = schoolOrUniversityName;
  }
  buyTicket(price) {
    if (this.amountOfMoney < price) return false;
    this.amountOfMoney -= price;
    return true;
  }
}
