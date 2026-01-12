import { useEffect, useState } from "react";

const MoviePicker = ({ selectedMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesApiUrl = `${import.meta.env.VITE_API_URL}/movies`;

    let ignore = false;

    async function getData() {
      try {
        if (ignore) return;
        const response = await fetch(moviesApiUrl);
        const data = await response.json();

        setMovies(data);
        selectedMovie(data[0].id);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    getData();
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
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
    </>
  );
};

export default MoviePicker;
