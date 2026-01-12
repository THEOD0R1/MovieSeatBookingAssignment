import { useState } from "react";
import "./BookMovieSeat.css";
import MoviePicker from "./MoviePicker";
import Seats from "./Seats";
import { Auditorium } from "../../Models/Auditorium";

export const BookMovieSeat = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedMovie);
  const seats = new Auditorium(1, "Main Auditorium").seats;

  const handleSeatChange = (seatId, isOccupied) => {
    const existingSeat = selectedSeats.find((seat) => seat.seatId === seatId);
    if (existingSeat) {
      setSelectedSeats(
        selectedSeats.map((seat) =>
          seat.seatId === seatId ? { ...seat, isOccupied } : seat
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, { seatId, isOccupied }]);
    }
  };

  return (
    <>
      <div className="movie-container">
        <MoviePicker selectedMovie={setSelectedMovie} />
      </div>
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
        {/* <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
        </div> */}
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
};
