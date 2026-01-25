import { auditoriumSeats } from "../variables";

export class Schedule {
  constructor(id, movie, startTime, endTime) {
    this.id = id;
    this.movie = movie;
    this.startTime = startTime;
    this.endTime = endTime;
    this.seats = auditoriumSeats;
  }
}
