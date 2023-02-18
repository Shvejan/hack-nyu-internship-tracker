import React from "react";
import JobsContext from "../context/JobsContext";
import "../css/authenticated-styles.css";

export default function AuthenticatedPage() {
  // const { jobs } = useContext(JobsContext);
  return (
    <div className="dashboard-body">
      <div className="row dashboard-layout">
        <div className="col-3">
          <p>left</p>
        </div>
        <div className="col-9">
          <p>the othe part of the table</p>
        </div>
      </div>
    </div>
  );
}
