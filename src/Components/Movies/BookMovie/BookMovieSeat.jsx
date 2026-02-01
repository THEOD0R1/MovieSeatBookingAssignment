import { useState } from "react";
import "./BookMovieSeat.css";
import MoviePicker from "./MoviePicker";
import Seats from "./Seats";
import { auditoriumSeats, bookingsApiUrl } from "../../../variables";
import BookMovieForm from "./BookMovieForm";
import { BookingData } from "../../../Models/BookingData";
import { fetchPost } from "../../../Functions/Fetch/fetchPost";
import { idGenerator } from "../../Generators/idGenerator";

export const BookMovieSeat = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMode, setSelectedMode] = useState("bookingView");

  const seats = auditoriumSeats;

  const totalPrice = (selectedMovie?.price * selectedSeats.length).toString();

  const createStartBookingValue = new BookingData(
    null,
    null,
    selectedMovie?.id,
    "",
    "",
    "",
    selectedSeats,
  );

  const handleSeatChange = (seatId, isOccupied, seatNumber) => {
    if (isOccupied) {
      setSelectedSeats([
        ...selectedSeats,
        { id: seatId, number: seatNumber, occupied: isOccupied },
      ]);
    } else {
      const filteredList = selectedSeats.filter((seat) => seat.id !== seatId);
      setSelectedSeats(filteredList);
    }
  };
  const handleBookingData = async (booking) => {
    const id = idGenerator("booking-");
    const newBooking = new BookingData(
      id,
      null,
      booking?.movieId,
      booking?.firstName,
      booking?.lastName,
      booking?.email,
      booking?.bookedSeats,
    );
    const response = await fetchPost(bookingsApiUrl, {
      ...newBooking,
    });
    if (response.ok) setSelectedMode("bookingSuccessView");
  };
  const handleBookingCancel = () => {
    setSelectedSeats([]);
    setSelectedMode("bookingView");
  };
  return (
    <section className="main-app-section">
      {selectedMode === "bookingView" && (
        <>
          <MoviePicker selectedMovie={setSelectedMovie} />
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="container">
            <div className="screen"></div>
            <Seats seats={seats} onSeatChange={handleSeatChange} />
          </div>
          <p className="text">
            You have selected <span id="count">{selectedSeats.length}</span>{" "}
            seats for a price of SEK <span id="total">{totalPrice}</span>
          </p>
          <button
            onClick={() => {
              if (selectedSeats.length > 0) setSelectedMode("bookMovie");
            }}
            className={`book-btn ${selectedSeats.length === 0 && "book-btn-disable"}`}
          >
            Book
          </button>
        </>
      )}
      {selectedMode === "bookMovie" && (
        <BookMovieForm
          handleBookingData={handleBookingData}
          startBookingValue={createStartBookingValue}
          title={"Book Movie"}
          cancel={handleBookingCancel}
        />
      )}
      {selectedMode === "bookingSuccessView" && <div>Booked successfully</div>}
    </section>
  );
};
