import { useState } from "react";
import "./BookMovieSeat.css";
import MoviePicker from "./MoviePicker";
import Seats from "./Seats";
import { auditoriumSeats } from "../../../variables";
import BookMovieForm from "./BookMovieForm";

export const BookMovieSeat = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMode, setSelectedMode] = useState("bookingView");

  const seats = auditoriumSeats;

  const handleSeatChange = (seatId, isOccupied) => {
    if (isOccupied) {
      setSelectedSeats([
        ...selectedSeats,
        { id: seatId, isOccupied: isOccupied },
      ]);
    } else {
      const filteredList = selectedSeats.filter((seat) => seat.id !== seatId);
      setSelectedSeats(filteredList);
    }
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
            seats for a price of SEK{" "}
            <span id="total">
              {(selectedMovie?.price * selectedSeats.length).toString()}
            </span>
          </p>
          <button
            onClick={() => setSelectedMode("bookMovie")}
            className="book-btn"
          >
            Book
          </button>
        </>
      )}
      {selectedMode === "bookMovie" && (
        <BookMovieForm cancel={() => setSelectedMode("bookingView")} />
      )}
    </section>
  );
};
