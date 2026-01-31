import { useState } from "react";
import { isValidMovieName } from "../../../Validations/isValidMovieName";
import { BookingData } from "../../../Models/BookingData";

const BookMovieForm = ({
  cancel,
  submitButtonContent = "Book",
  title,
  handleBookingData,
  startMovieValue = new BookingData(null, null, "", "", "", ""),
}) => {
  const [bookingInfo, setBookingInfo] = useState(startMovieValue);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let error = {
      firstName: "",
      lastName: "",
    };

    const validName = isValidMovieName(bookingInfo?.firstName);

    if (!validName) error.firstName = " In valid title";
    else error.firstName = "";

    setErrorMessage(error);
    if (!validName) return;
    await handleBookingData(bookingInfo);
  };
  return (
    <section className="movie-form-container">
      <h3 className="movie-form-title">{title}</h3>
      <form onSubmit={onFormSubmit} className="movie-form">
        <label htmlFor="movie-title-form">
          First Name*
          <span className="error-message">{errorMessage.firstName}</span>
        </label>
        <input
          className="movie-form-input"
          value={bookingInfo.firstName}
          onChange={(e) =>
            setBookingInfo({ ...bookingInfo, firstName: e.target.value })
          }
          id="movie-title-form"
          type="text"
          placeholder="Batman Begins"
        />
        <label htmlFor="movie-price-form">
          Last Name*
          <span className="error-message">{errorMessage.lastName}</span>
        </label>
        <input
          className="movie-form-input"
          value={bookingInfo.lastName}
          onChange={(e) =>
            setBookingInfo({ ...bookingInfo, lastName: e.target.value })
          }
          id="movie-price-form"
          type="text"
          placeholder="120"
        />
        <div className="movie-form-options">
          <button className="movie-form-submit">{submitButtonContent}</button>
          <button type="button" onClick={cancel} className="movie-form-cancel">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookMovieForm;
