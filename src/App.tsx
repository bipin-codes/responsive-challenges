import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Links = [{ to: "/scarecrow", label: "Not found Challenge." }];
const App = () => {
  return (
    <ul>
      {Links.map((route) => (
        <li>
          <Link to={route.to!}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default App;
