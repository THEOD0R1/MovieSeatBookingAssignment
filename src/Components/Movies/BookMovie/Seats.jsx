import Seat from "./Seat";
import "./Seats.css";

const Seats = ({ seats = [], onSeatChange, isAdmin = false }) => {
  return (
    <div className="theater">
      {seats.map((seat, index) => (
        <Seat
          key={"keySeat" + seat.id}
          seat={seat}
          index={index}
          onSeatChange={onSeatChange}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};

export default Seats;
