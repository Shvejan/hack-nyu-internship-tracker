import React from "react";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-title row">
        <h2 className="col-4">Tracy</h2>
        <p className="col" style={{ marginTop: "12px", marginLeft: "10px" }}>
          Application Tracker
        </p>
      </div>
    </nav>
  );
}
