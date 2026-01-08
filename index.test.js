import { test } from "node:test";
import assert from "node:assert";
import Airport from "./classes/airport.js";
import { RegularPassenger } from "./classes/passengers/regularPassenger.js";
import { StudentPassenger } from "./classes/passengers/studentPassenger.js";

test.describe("passenger testing", () => {

  const airport = new Airport();
  test("passenger do not have egnoph mony", () => {
    const passenger = new RegularPassenger("jhon", 1, "idf", true);
    assert.strictEqual(airport.flights[0].buyRTicket(passenger), false);
  });

  test("passenger have egnoph mony", () => {
    const passenger = new RegularPassenger("jhon", 10000, "idf", true);
    airport.flights[0].buyRTicket(passenger);
    assert.strictEqual(airport.flights[0].ticketsList[0].ownerName, passenger.name);
    assert.notStrictEqual(passenger.amountOfMoney, 10000);
  });

 test("student do not have egnoph mony", () => {
    const passenger = new StudentPassenger("jhon", 1, "idf", true);
    assert.strictEqual(airport.flights[0].buyVipTicket(passenger), false);
  });

  test("student have egnoph mony", () => {
    const passenger = new StudentPassenger("jhon", 10000, "idf", true);
    airport.flights[0].buyVipTicket(passenger);
    assert.strictEqual(airport.flights[0].ticketsList[0].ownerName, passenger.name);
    assert.notStrictEqual(passenger.amountOfMoney, 10000);
  });


});


