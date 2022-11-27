import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Links = [
  { to: "/scarecrow", label: "Not found Challenge." },
  { to: "/teams", label: "My Team Challenge." },
  { to: "/interior", label: "Interior Consultant Challenge." },
  { to: "/recipe", label: "Recipe page Challenge." },
  { to: "/gallery", label: "Gallery Challenge." },
];
const App = () => {
  return (
    <>
      <h2 className="title">Responsive Challenges</h2>
      <h6 className="sub-title">
        Please select any one of the below links to view the challenge.
      </h6>
      <ul className="routes-list">
        {Links.map((route) => (
          <li className="route-item">
            <Link to={route.to!}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
