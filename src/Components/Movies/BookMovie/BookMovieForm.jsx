import { useState } from "react";
import { isValidMovieName } from "../../../Validations/isValidMovieName";
import { isValidEmail } from "../../../Validations/isValidEmail";
import { moviesApiUrl } from "../../../variables";
import { useFetchDataOnLoad } from "../../../Hooks/useFetchDataOnLoad";

const BookMovieForm = ({
  cancel,
  submitButtonContent = "Book",
  title,
  handleBookingData,
  startBookingValue,
}) => {
  const [bookingInfo, setBookingInfo] = useState(startBookingValue);
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const fetchedMovieData = async (data) => setMovieData(data);

  useFetchDataOnLoad(
    `${moviesApiUrl}/${startBookingValue?.movieId}`,
    fetchedMovieData,
  );

  if (!startBookingValue) return;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let error = {
      firstName: "",
      lastName: "",
      email: "",
    };

    const validFirstName = isValidMovieName(bookingInfo?.firstName);
    const validLastName = isValidMovieName(bookingInfo?.lastName);
    const validEmail = isValidEmail(bookingInfo?.email);

    if (!validFirstName) error.firstName = " Invalid first name";
    else error.firstName = "";

    if (!validLastName) error.lastName = " Invalid last name";
    else error.lastName = "";

    if (!validEmail) error.email = " Invalid email";
    else error.email = "";

    setErrorMessage(error);
    if (!validFirstName || !validLastName || !validEmail) return;
    await handleBookingData(bookingInfo);
  };
  return (
    <section className="movie-form-container">
      <h3 className="movie-form-title">{title}</h3>
      <section className="movie-booking-info">
        <ul>
          <li>
            Movie name: <b>{movieData?.title}</b>
          </li>
          <li>
            Total price: {bookingInfo?.bookedSeats?.length * +movieData?.price}{" "}
            SEK ({+movieData?.price} SEK x {bookingInfo?.bookedSeats?.length})
          </li>
          <li>
            Selected seats:
            <ul>
              {bookingInfo?.bookedSeats?.map((seat, i) => (
                <li key={seat?.id + i.toString()}>
                  Seat: <b>{seat?.number}</b>
                </li>
              ))}
            </ul>
          </li>
          <li></li>
        </ul>
      </section>
      <form onSubmit={onFormSubmit} className="movie-form">
        <label htmlFor="movie-first-name-form">
          First Name*
          <span className="error-message">{errorMessage.firstName}</span>
        </label>
        <input
          className="movie-form-input"
          value={bookingInfo.firstName}
          onChange={(e) =>
            setBookingInfo({ ...bookingInfo, firstName: e.target.value })
          }
          id="movie-first-name-form"
          type="text"
          placeholder="Alfons"
        />
        <label htmlFor="movie-last-name-form">
          Last Name*
          <span className="error-message">{errorMessage.lastName}</span>
        </label>
        <input
          className="movie-form-input"
          value={bookingInfo.lastName}
          onChange={(e) =>
            setBookingInfo({ ...bookingInfo, lastName: e.target.value })
          }
          id="movie-last-name-form"
          type="text"
          placeholder="Bert"
        />
        <label htmlFor="movie-email-form">
          Email*
          <span className="error-message">{errorMessage.email}</span>
        </label>
        <input
          className="movie-form-input"
          value={bookingInfo.email}
          onChange={(e) =>
            setBookingInfo({ ...bookingInfo, email: e.target.value })
          }
          id="movie-email-form"
          type="text"
          placeholder="alfonsb@gmail.com"
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
