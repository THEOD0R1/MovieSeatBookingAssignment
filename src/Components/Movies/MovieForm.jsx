import { useState } from "react";
import "./MovieForm.css";
import { Movie } from "../../Models/Movie";
import { isValidMovieName } from "../../Validations/isValidMovieName";
import { isValidPrice } from "../../Validations/isValidPrice";

const MovieForm = ({
  submitButtonContent,
  title,
  handleMovieData,
  handleCancel,
  startMovieValue = new Movie(null, "", ""),
}) => {
  const [movie, setMovie] = useState(startMovieValue);
  const [errorMessage, setErrorMessage] = useState({ title: "", price: "" });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let error = {
      title: "",
      price: "",
    };

    const validName = isValidMovieName(movie.title);
    const validPrice = isValidPrice(+movie.price.trim());

    if (!validName) error.title = " In valid title";
    else error.title = "";

    if (!validPrice) error.price = " In valid price";
    else error.price = "";

    setErrorMessage(error);

    if (!validName || !validPrice) return;
    await handleMovieData(movie);
  };

  return (
    <section>
      <h3 className="movie-form-title">{title}</h3>
      <form onSubmit={onFormSubmit} className="movie-form">
        <label htmlFor="movie-title-form">
          Title*
          <span className="error-message">{errorMessage.title}</span>
        </label>
        <input
          className="movie-form-input"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          id="movie-title-form"
          type="text"
          placeholder="Batman Begins"
        />
        <label htmlFor="movie-price-form">
          Price*
          <span className="error-message">{errorMessage.price}</span>
        </label>
        <input
          className="movie-form-input"
          value={movie.price}
          onChange={(e) => setMovie({ ...movie, price: e.target.value })}
          id="movie-price-form"
          type="text"
          placeholder="170 (SEK)"
        />
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

export default MovieForm;
