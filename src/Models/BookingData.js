export class BookingData {
  constructor(
    id,
    scheduleId,
    movieId,
    firstName,
    lastName,
    email,
    bookedSeats,
  ) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.movieId = movieId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.bookedSeats = bookedSeats;
  }
}
