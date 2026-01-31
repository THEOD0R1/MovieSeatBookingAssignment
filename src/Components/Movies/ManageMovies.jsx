import { useState } from "react";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import "./ManageMovies.css";
import MovieForm from "./MovieForm";
import { Movie } from "../../Models/Movie";
import { idGenerator } from "../Generators/idGenerator";
import {
  adminModeSelect,
  modeEditMovie,
  modeViewMovies,
  moviesApiUrl,
} from "../../variables.js";
import DataTable from "../Admin/DataTable.jsx";
import { fetchDelete } from "../../Functions/Fetch/fetchDelete.js";
import { fetchPatch } from "../../Functions/Fetch/fetchPatch.js";
import { fetchPost } from "../../Functions/Fetch/fetchPost.js";

const ManageMovies = ({ onButtonClick }) => {
  const [movies, setMovies] = useState([]);
  const [deletedMovieId, setDeletedMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectMode, setSelectMode] = useState(modeViewMovies);

  useFetchDataOnLoad(moviesApiUrl, (data) => setMovies(data), [
    selectMode,
    deletedMovieId,
  ]);

  const handleNewMovie = async (newMovie) => {
    const id = idGenerator("movie-");
    const movie = new Movie(
      id,
      newMovie.title,
      newMovie.price,
      newMovie.movieLength,
    );
    await fetchPost(moviesApiUrl, movie);
    setSelectMode(modeViewMovies);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setSelectMode(modeEditMovie);
  };

  const handleEditMovie = async (updatedMovie) => {
    await fetchPatch(`${moviesApiUrl}/${updatedMovie.id}`, {
      title: updatedMovie.title,
      price: updatedMovie.price,
      movieLength: updatedMovie.movieLength,
    });
    setSelectMode(modeViewMovies);
  };

  const handleDeleteMovie = async (id) => {
    const response = await fetchDelete(`${moviesApiUrl}/${id}`);

    if (response.ok) setDeletedMovieId(id);
  };

  return (
    <section className="manage-movies-container">
      <header className="manage-movies-header">
        <h2 className="manage-movie-title">
          <button
            onClick={() => onButtonClick(adminModeSelect)}
            className="go-to-manage"
          >
            Manage
          </button>
          Movies
        </h2>
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
          <DataTable
            data={movies}
            onEdit={handleMovieClick}
            onDelete={handleDeleteMovie}
          />
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
