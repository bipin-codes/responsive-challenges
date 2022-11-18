import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <ul>
      <li>
        <Link to={"/scarecrow"} title={"NotFound Challenge"}>
          {"click"}
        </Link>
      </li>
    </ul>
  );
};

export default App;
