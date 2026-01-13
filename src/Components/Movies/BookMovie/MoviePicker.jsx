import { useState } from "react";
import { useFetchDataOnLoad } from "../../../Hooks/useFetchDataOnLoad";
import { moviesApiUrl } from "../../../Variables,js";

const MoviePicker = ({ selectedMovie }) => {
  const [movies, setMovies] = useState([]);

  useFetchDataOnLoad(moviesApiUrl, (data) => {
    setMovies(data);
    selectedMovie(data[0].id);
  });

  return (
    <section className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      {movies?.length > 0 && (
        <select
          onChange={(e) => selectedMovie(e.target.value)}
          name="movie"
          id="movie"
        >
          {movies?.map((movie) => (
            <option key={"keyMovie" + movie.id} value={movie.id}>
              {movie?.title} ({movie?.price} kr)
            </option>
          ))}
        </select>
      )}
    </section>
  );
};

export default MoviePicker;
