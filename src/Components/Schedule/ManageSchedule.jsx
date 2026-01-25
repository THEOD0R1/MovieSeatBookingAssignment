import { adminModeSelect } from "../../variables";
import ScheduleView from "./ScheduleView";

const ManageSchedule = ({ onButtonClick }) => {
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
          Schedule
        </h2>
      </header>
      <ScheduleView />
    </section>
  );
};

export default ManageSchedule;
