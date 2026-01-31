import { useState } from "react";
import "./AddNewSchedule.css";
import { Schedule } from "../../Models/Schedule";
import { isValidMovieName } from "../../Validations/isValidMovieName";
import DropdownSearch from "./DropdownSearch";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import { auditoriumsApiUrl, moviesApiUrl } from "../../variables";
import { isValidDateTimeLocal } from "../../Validations/isValidDateTimeLocal";
const AddNewSchedule = ({
  submitButtonContent,
  title,
  handleScheduleData,
  handleCancel,
  startScheduleValue = new Schedule(null, null, "", ""),
}) => {
  const [movieData, setMovieData] = useState([]);
  const [auditoriumData, setAuditoriumData] = useState([]);
  const [schedule, setSchedule] = useState(startScheduleValue);
  const [errorMessage, setErrorMessage] = useState({
    startTime: "",
    movieError: "",
    auditoriumTitle: "",
  });

  useFetchDataOnLoad(moviesApiUrl, (data) => setMovieData(data));
  useFetchDataOnLoad(auditoriumsApiUrl, (data) => setAuditoriumData(data));

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let error = {
      startTime: "",
      movieError: "",
      auditoriumTitle: "",
    };

    const validStartTime = isValidDateTimeLocal(schedule.startTime);
    const validMovie = !!schedule?.movieId;
    const validAuditorium = isValidMovieName(schedule?.auditorium?.title);

    if (!validStartTime) error.startTime = " Invalid start time";
    else error.startTime = "";

    if (!validMovie) error.movieError = " Invalid movie";
    else error.movieError = "";

    if (!validAuditorium) error.auditoriumTitle = " Invalid Auditorium";
    else error.auditoriumTitle = "";

    setErrorMessage(error);

    if (!validStartTime || !validMovie || !validAuditorium) return;
    await handleScheduleData(schedule);
  };

  return (
    <section className="movie-form-container">
      <h3 className="movie-form-title">{title}</h3>
      <form onSubmit={onFormSubmit} className="movie-form">
        <label htmlFor="schedule-date-form">
          Start Time*
          <span className="error-message">{errorMessage.startTime}</span>
        </label>
        <input
          className="movie-form-input"
          value={schedule.startTime}
          onChange={(e) =>
            setSchedule({ ...schedule, startTime: e.target.value })
          }
          id="schedule-date-form"
          type="datetime-local"
        />
        <DropdownSearch
          items={movieData}
          handleSelectedValue={(movie) =>
            setSchedule({ ...schedule, movieId: movie.id })
          }
          identifier={"dropdown-movie-schedule"}
        >
          Search for Movie*
          <span className="error-message">{errorMessage.movieError}</span>
        </DropdownSearch>
        <DropdownSearch
          items={auditoriumData}
          handleSelectedValue={(auditorium) =>
            setSchedule({ ...schedule, auditorium: auditorium })
          }
          identifier={"dropdown-auditorium-schedule"}
        >
          Search for Auditoriums*
          <span className="error-message">{errorMessage.auditoriumTitle}</span>
        </DropdownSearch>
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

export default AddNewSchedule;
