import { useState } from "react";
import { Auditorium } from "../../Models/Auditorium";
import { isValidMovieName } from "../../Validations/isValidMovieName";
import Seats from "../Movies/BookMovie/Seats";

const AuditoriumForm = ({
  submitButtonContent,
  title,
  handleAuditoriumData,
  handleCancel,
  startAuditoriumValue = new Auditorium("", ""),
}) => {
  const [auditorium, setAuditorium] = useState(startAuditoriumValue);
  const [errorMessage, setErrorMessage] = useState("");

  //   const handleSeatChange = (seatId, occupied) => {
  //     auditorium.seats = auditorium.seats.map((seat) => {
  //       if (seat.id === seatId) {
  //         return { ...seat, occupied: occupied };
  //       }
  //       return seat;
  //     });
  //   };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let error = "";

    const validTitle = isValidMovieName(auditorium.title);

    if (!validTitle) error = " In valid title";
    else error = "";

    setErrorMessage(error);

    if (!validTitle) return;
    await handleAuditoriumData(auditorium);
  };

  return (
    <section className="movie-form-container">
      <h3 className="movie-form-title">{title}</h3>
      <form onSubmit={onFormSubmit} className="movie-form">
        <label htmlFor="movie-title-form">
          Title*
          <span className="error-message">{errorMessage}</span>
        </label>
        <input
          className="movie-form-input"
          value={auditorium.title}
          onChange={(e) =>
            setAuditorium({ ...auditorium, title: e.target.value })
          }
          id="movie-title-form"
          type="text"
          placeholder="Theater 1"
        />
        {/* <div className="container">
          <div className="screen"></div>
          <Seats
            isAdmin={true}
            seats={startAuditoriumValue.seats}
            onSeatChange={handleSeatChange}
          />
        </div> */}
        <div className="movie-form-options">
          <button className="movie-form-submit">{submitButtonContent}</button>
          <button
            type="button"
            onClick={handleCancel}
            className="movie-form-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuditoriumForm;
