import "./ManageList.css";

const ManageList = ({ onButtonClick }) => {
  return (
    <ul className="manage-list">
      <li>
        <button
          className="btm-manage-movie"
          onClick={() => onButtonClick("editMovie")}
        >
          Movies
        </button>
      </li>
      <li>
        <button
          className="btm-manage-movie"
          onClick={() => onButtonClick("editAuditorium")}
        >
          Auditoriums
        </button>
      </li>
      <li>
        <button
          className="btm-manage-movie"
          onClick={() => onButtonClick("editSchedule")}
        >
          Schedule
        </button>
      </li>
    </ul>
  );
};
export default ManageList;
