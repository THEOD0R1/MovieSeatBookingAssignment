import { auditoriumSeats } from "../Variables";

export class Auditorium {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.seats = auditoriumSeats;
  }
}
