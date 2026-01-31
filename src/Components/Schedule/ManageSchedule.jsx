import { useState } from "react";
import { useFetchDataOnLoad } from "../../Hooks/useFetchDataOnLoad";
import {
  adminModeSelect,
  auditoriumsApiUrl,
  modeAddNewSchedule,
  modeViewSchedule,
} from "../../variables";
import Dropdown from "../Dropdown";
import ScheduleView from "./ScheduleView";
import AddNewSchedule from "./AddNewSchedule";
import { idGenerator } from "../Generators/idGenerator";
import { Schedule } from "../../Models/Schedule";
import { fetchPatch } from "../../Functions/Fetch/fetchPatch";
import { calcTimeAfterXMin } from "../../Functions/Date/calcTimeAfterXMin";

const ManageSchedule = ({ onButtonClick }) => {
  const [auditoriumData, setAuditoriumData] = useState(null);
  const [selectedAuditorium, setSelectedAuditorium] = useState(null);
  const [selectMode, setSelectMode] = useState(modeViewSchedule);

  useFetchDataOnLoad(
    auditoriumsApiUrl,
    (data) => {
      setSelectedAuditorium(data[0]);
      setAuditoriumData(data);
    },
    [selectMode],
  );
  const handleSelectedAuditorium = (item) => setSelectedAuditorium(item);

  const handleNewScheduleEvent = async (newSchedule) => {
    const endtime = calcTimeAfterXMin(new Date(newSchedule.startTime), 100);

    const id = idGenerator("schedule-");
    const schedule = new Schedule(
      id,
      newSchedule.movieId,
      newSchedule.startTime,
      endtime,
    );
    await fetchPatch(`${auditoriumsApiUrl}/${newSchedule?.auditorium?.id}`, {
      schedules: [...newSchedule.auditorium.schedules, schedule],
    });
    setSelectMode(modeViewSchedule);
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
          Schedule <span></span>
        </h2>
        {selectMode === modeViewSchedule && (
          <button
            onClick={() => setSelectMode(modeAddNewSchedule)}
            className="btn-add-movie"
          >
            Add Event
          </button>
        )}
      </header>
      {selectMode === modeViewSchedule && (
        <>
          <Dropdown
            items={auditoriumData}
            handleSelectedValue={handleSelectedAuditorium}
          />
          <ScheduleView schedule={selectedAuditorium?.schedules} />
        </>
      )}
      {selectMode === modeAddNewSchedule && (
        <AddNewSchedule
          submitButtonContent={"Add Event"}
          handleCancel={() => setSelectMode(modeViewSchedule)}
          title={"Add Event"}
          handleScheduleData={handleNewScheduleEvent}
        />
      )}
    </section>
  );
};

export default ManageSchedule;
