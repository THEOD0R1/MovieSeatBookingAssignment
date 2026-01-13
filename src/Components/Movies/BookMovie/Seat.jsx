import { useState } from "react";
import "./Seats.css";
const Seat = ({ seat, onSeatChange }) => {
  const [selected, setSelected] = useState(seat.occupied);
  const handleClick = () => {
    onSeatChange(seat.id, !selected);
    setSelected(!selected);
  };
  return (
    <button
      aria-label={`Seat ${seat.number} is ${
        seat.occupied ? "occupied" : selected ? "selected" : "free"
      }`}
      className={`seat ${
        seat.occupied ? "occupied" : selected ? "selected" : ""
      }`}
      onClick={handleClick}
    ></button>
  );
};

export default Seat;
