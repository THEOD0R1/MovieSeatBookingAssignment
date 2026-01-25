import { useState } from "react";
import "./BookMovieSeat.css";
import MoviePicker from "./MoviePicker";
import Seats from "./Seats";
import { Auditorium } from "../../../Models/Auditorium";

export const BookMovieSeat = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  console.log(selectedMovie);
  const seats = new Auditorium(1, "Main Auditorium").seats;

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
        You have selected <span id="count">{selectedSeats.length}</span> seats
        for a price of $<span id="total">{0}</span>
      </p>
    </section>
  );
};
