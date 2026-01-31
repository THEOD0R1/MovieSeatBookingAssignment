import { auditoriumSeats } from "../variables";

export class Schedule {
  constructor(id, movieId, startTime, endTime) {
    this.id = id;
    this.movieId = movieId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.seats = auditoriumSeats;
  }
}
