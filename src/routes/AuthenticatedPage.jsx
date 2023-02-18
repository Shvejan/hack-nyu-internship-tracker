import React from "react";
import JobBoard from "../components/JobBoard";
import LeftDock from "../components/LeftDock";
import NavBar from "../components/NavBar";
import JobsContext from "../context/JobsContext";
import "../css/authenticated-styles.css";

export default function AuthenticatedPage() {
  // const { jobs } = useContext(JobsContext);
  return (
    <div className="dashboard-body">
      <NavBar />
      <div className="dashboard-layout row">
        <div className="col-2 left-dock">
          <LeftDock />
        </div>
        <div className="col-10 right-dock">
          <JobBoard />
        </div>
      </div>
    </div>
  );
}
