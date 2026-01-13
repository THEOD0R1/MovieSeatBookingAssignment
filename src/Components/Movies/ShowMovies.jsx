import "./ShowMovies.css";
const ShowMovies = ({ movies, onMovieClick = () => {} }) => {
  return (
    <ul className="show-movie-list">
      {movies?.map((movie) => (
        <li key={"keyMovie" + movie.id}>
          <button onClick={() => onMovieClick(movie)}>
            {movie?.title} ({movie?.price} kr)
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShowMovies;
