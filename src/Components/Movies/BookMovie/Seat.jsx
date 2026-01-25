import { useState } from "react";
import "./Seats.css";
const Seat = ({ seat, onSeatChange, isAdmin = false }) => {
  const [selected, setSelected] = useState(seat.occupied);
  const handleClick = () => {
    if (seat.occupied && !isAdmin) return;
    onSeatChange(seat.id, !selected, seat.number);
    setSelected(!selected);
  };
  return (
    <button
      title={seat.number}
      type="button"
      aria-label={`Seat ${seat.number} is ${
        seat.occupied && selected ? "occupied" : selected ? "selected" : "free"
      }`}
      className={`seat ${
        seat.occupied && selected ? "occupied" : selected ? "selected" : ""
      }`}
      onClick={handleClick}
    ></button>
  );
};

export default Seat;
