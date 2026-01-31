import {
  adminModeSelect,
  auditoriumsApiUrl,
  modeAddNewAuditorium,
  modeEditAuditorium,
  modeViewAuditoriums,
} from "../../variables";
import DataTable from "../Admin/DataTable";
import { useState } from "react";
import AuditoriumForm from "./AuditoriumForm";
import { Auditorium } from "../../Models/Auditorium";
import { idGenerator } from "../Generators/idGenerator";
import { fetchPost } from "../../Functions/Fetch/fetchPost";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import { fetchDelete } from "../../Functions/Fetch/fetchDelete";
import { fetchPatch } from "../../Functions/Fetch/fetchPatch";

const ManageAuditorium = ({ onButtonClick }) => {
  const [selectMode, setSelectMode] = useState(modeViewAuditoriums);
  const [auditoriums, setAuditoriums] = useState([]);
  const [deletedAuditoriumId, setDeletedAuditoriumId] = useState(null);
  const [selectedAuditorium, setSelectedAuditorium] = useState(null);

  const handleAuditoriumData = async (auditorium) => {
    setAuditoriums(auditorium);
  };

  useFetchDataOnLoad(auditoriumsApiUrl, handleAuditoriumData, [
    selectMode,
    deletedAuditoriumId,
  ]);
  const handleNewAuditorium = async (newAuditorium) => {
    const id = idGenerator("auditorium-");
    const auditorium = new Auditorium(id, newAuditorium.title);
    await fetchPost(auditoriumsApiUrl, auditorium);

    setSelectMode(modeViewAuditoriums);
  };
  const handleAuditoriumClick = (auditorium) => {
    setSelectedAuditorium(auditorium);
    setSelectMode(modeEditAuditorium);
  };

  const handleDeleteAuditorium = async (id) => {
    const response = await fetchDelete(`${auditoriumsApiUrl}/${id}`);

    if (response.ok) setDeletedAuditoriumId(id);
  };

  const handleEditAuditorium = async (updatedAuditorium) => {
    await fetchPatch(`${auditoriumsApiUrl}/${updatedAuditorium.id}`, {
      title: updatedAuditorium.title,
      seats: updatedAuditorium.seats,
    });
    setSelectMode(modeViewAuditoriums);
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
          Auditorium
        </h2>

        {selectMode === modeViewAuditoriums && (
          <button
            className="btn-add-movie"
            onClick={() => setSelectMode(modeAddNewAuditorium)}
          >
            Add Auditorium
          </button>
        )}
      </header>
      {selectMode === modeViewAuditoriums && (
        <DataTable
          data={auditoriums}
          onDelete={handleDeleteAuditorium}
          onEdit={handleAuditoriumClick}
        />
      )}
      {selectMode === modeEditAuditorium && (
        <AuditoriumForm
          submitButtonContent="Save Changes"
          handleCancel={() => setSelectMode(modeViewAuditoriums)}
          startAuditoriumValue={selectedAuditorium}
          handleAuditoriumData={handleEditAuditorium}
          title={"Edit Auditorium"}
        />
      )}
      {selectMode === modeAddNewAuditorium && (
        <AuditoriumForm
          submitButtonContent="Add Auditorium"
          handleCancel={() => setSelectMode(modeViewAuditoriums)}
          handleAuditoriumData={handleNewAuditorium}
          title={"Add Auditorium"}
        />
      )}
    </section>
  );
};

export default ManageAuditorium;
