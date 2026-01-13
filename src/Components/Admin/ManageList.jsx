import "./ManageList.css";

const ManageList = ({ onButtonClick }) => {
  return (
    <ul className="manage-list">
      <li>
        <button
          className="btm-manage-movie"
          onClick={() => onButtonClick("editMovie")}
        >
          Manage Movies
        </button>
      </li>
    </ul>
  );
};
export default ManageList;
