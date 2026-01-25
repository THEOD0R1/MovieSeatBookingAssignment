import "./Admin.css";
import { useState } from "react";
import ManageMovies from "../Movies/ManageMovies";
import ManageList from "./ManageList";
import ManageAuditorium from "../Auditorium/ManageAuditorium";
import { adminModeSelect } from "../../variables";
import ManageSchedule from "../Schedule/ManageSchedule";
const Admin = () => {
  const [editMode, setEditMode] = useState(adminModeSelect);
  return (
    <section className="admin-page">
      {editMode === adminModeSelect && (
        <ManageList onButtonClick={setEditMode} />
      )}

      {editMode === "editMovie" && <ManageMovies onButtonClick={setEditMode} />}
      {editMode === "editAuditorium" && (
        <ManageAuditorium onButtonClick={setEditMode} />
      )}
      {editMode === "editSchedule" && (
        <ManageSchedule onButtonClick={setEditMode} />
      )}
    </section>
  );
};

export default Admin;
