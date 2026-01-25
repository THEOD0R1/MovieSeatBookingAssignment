import { useState } from "react";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import ShowMovies from "./ShowMovies";
import "./ManageMovies.css";
import MovieForm from "./MovieForm";
import { Movie } from "../../Models/Movie";
import { idGenerator } from "../Generators/idGenerator";
import {
  modeEditMovie,
  modeViewMovies,
  moviesApiUrl,
} from "../../variables.js";

const ManageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectMode, setSelectMode] = useState(modeViewMovies);

  useFetchDataOnLoad(moviesApiUrl, (data) => setMovies(data), [selectMode]);

  const handleNewMovie = async (newMovie) => {
    const id = idGenerator("movie-");
    const movie = new Movie(id, newMovie.title, newMovie.price);
    await fetch(moviesApiUrl, {
      method: "POST",
      body: JSON.stringify(movie),
    });
    setSelectMode(modeViewMovies);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setSelectMode(modeEditMovie);
  };

  const handleEditMovie = async (updatedMovie) => {
    await fetch(`${moviesApiUrl}/${updatedMovie.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: updatedMovie.title,
        price: updatedMovie.price,
      }),
    });
    setSelectMode(modeViewMovies);
  };

  return (
    <section className="manage-movies-container">
      <header className="manage-movies-header">
        <h2 className="manage-movie-title">Manage Movies</h2>
        {selectMode === modeViewMovies && (
          <button
            onClick={() => setSelectMode("addNewMovie")}
            className="btn-add-movie"
          >
            Add Movie
          </button>
        )}
      </header>
      {selectMode === modeViewMovies && (
        <section className="show-movie-container">
          <ShowMovies movies={movies} onMovieClick={handleMovieClick} />
        </section>
      )}
      {selectMode === "addNewMovie" && (
        <MovieForm
          submitButtonContent={"Add Movie"}
          title={"Add New Movie"}
          handleCancel={() => setSelectMode(modeViewMovies)}
          handleMovieData={handleNewMovie}
        />
      )}
      {selectMode === modeEditMovie && (
        <MovieForm
          submitButtonContent={"Save Changes"}
          title={"Edit Movie"}
          handleCancel={() => setSelectMode(modeViewMovies)}
          handleMovieData={handleEditMovie}
          startMovieValue={selectedMovie}
        />
      )}
    </section>
  );
};

export default ManageMovies;
