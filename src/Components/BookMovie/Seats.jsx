import Seat from "./Seat";
import "./Seats.css";

const Seats = ({ seats = [], onSeatChange }) => {
  return (
    <div className="theater">
      {seats.map((seat, index) => (
        <Seat
          key={"keySeat" + seat.id}
          seat={seat}
          index={index}
          onSeatChange={onSeatChange}
        />
      ))}
    </div>
  );
};

export default Seats;
