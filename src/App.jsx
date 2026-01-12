import Admin from "./Components/Admin/Admin";
import { BookMovieSeat } from "./Components/BookMovie/BookMovieSeat";
import { useState } from "react";

function App() {
  const [toggleAdmin, setToggleAdmin] = useState(false);

  return (
    <section>
      <button
        className="toggle-admin"
        onClick={() => setToggleAdmin(!toggleAdmin)}
      >
        {toggleAdmin ? "Switch to User View" : "Switch to Admin View"}
      </button>
      {toggleAdmin ? <Admin /> : <BookMovieSeat />}
    </section>
  );
}

export default App;
