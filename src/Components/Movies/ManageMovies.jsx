import { useState } from "react";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import { moviesApiUrl } from "../../Variables,js";
import ShowMovies from "./ShowMovies";
import "./ManageMovies.css";
import MovieForm from "./MovieForm";
import { Movie } from "../../Models/Movie";
import { idGenerator } from "../Generators/idGenerator";

const ManageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectMode, setSelectMode] = useState("viewMovies");

  useFetchDataOnLoad(moviesApiUrl, (data) => setMovies(data), [selectMode]);

  const handleNewMovie = async (newMovie) => {
    const id = idGenerator("movie-");
    const movie = new Movie(id, newMovie.title, newMovie.price);
    await fetch(moviesApiUrl, {
      method: "POST",
      body: JSON.stringify(movie),
    });
    setSelectMode("viewMovies");
  };

  return (
    <section className="manage-movies-container">
      <h2>Manage Movies</h2>
      {selectMode === "viewMovies" && (
        <button
          onClick={() => setSelectMode("addNewMovie")}
          className="btn-add-movie"
        >
          Add Movie
        </button>
      )}
      {selectMode === "viewMovies" && (
        <section className="show-movie-container">
          <ShowMovies movies={movies} />
        </section>
      )}
      {selectMode === "addNewMovie" && (
        <MovieForm
          btnClassName={""}
          submitButtonContent={"Add Movie"}
          title={"Add New Movie"}
          handleMovieData={handleNewMovie}
        />
      )}
    </section>
  );
};

export default ManageMovies;
