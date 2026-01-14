import { auditoriumSeats } from "../variables";

export class Auditorium {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.seats = auditoriumSeats;
  }
}
