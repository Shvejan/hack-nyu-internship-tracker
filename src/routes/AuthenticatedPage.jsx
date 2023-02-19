import React from "react";
import JobBoard from "../components/JobBoard";
import LeftDock from "../components/LeftDock";
import NavBar from "../components/NavBar";
import "../css/authenticated-styles.css";

export default function AuthenticatedPage() {
  // const { jobs } = useContext(JobsContext);
  return (
    <div className="dashboard-body">
      <NavBar />
      <div className="dashboard-layout row">
        <LeftDock />
        <JobBoard />
      </div>
    </div>
  );
}
