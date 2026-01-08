import Airport from "./classes/airport.js";
import { RegularPassenger } from "./classes/passengers/regularPassenger.js";
import { StudentPassenger } from "./classes/passengers/studentPassenger.js";



const airport =new Airport()
const passenger = new RegularPassenger("jhon", 3000, "idf", true);
const spassenger = new StudentPassenger("momo", 10000, "IT");
airport.flights[0].buyRTicket(passenger)
airport.flights[0].buyVipTicket(spassenger)

console.log(airport.flights[0].ticketsList);
