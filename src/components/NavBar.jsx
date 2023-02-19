import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-bar">
      <div className="nav-title row">
        <h2 className="col-1" style={{ marginTop: "10px" }}>
          Tracy
        </h2>
        <p className="col-9" style={{ marginTop: "22px" }}>
          Application Tracker
        </p>
        <p className="col-2" style={{ marginTop: "22px" }}>
          Welcome {user.name}
        </p>
      </div>
    </nav>
  );
}
