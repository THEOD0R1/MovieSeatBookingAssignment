import "./Admin.css";
import { useState } from "react";
import ManageMovies from "../Movies/ManageMovies";
import ManageList from "./ManageList";
const Admin = () => {
  const [editMode, setEditMode] = useState("selectMode");
  return (
    <section className="admin-page">
      {editMode === "selectMode" && <ManageList onButtonClick={setEditMode} />}

      {editMode === "editMovie" && <ManageMovies />}
    </section>
  );
};

export default Admin;
