import React, { useContext, useEffect } from "react";
import { fetchJobsApi } from "../apis/fetchJobs";
import JobBoard from "../components/JobBoard";
import LeftDock from "../components/LeftDock";
import NavBar from "../components/NavBar";
import JobsContext from "../context/JobsContext";
import UserContext from "../context/UserContext";
import "../css/authenticated-styles.css";

export default function AuthenticatedPage() {
  const { user } = useContext(UserContext);
  const { setjobs } = useContext(JobsContext);

  useEffect(() => {
    fetchJobsApi(user.email, setjobs);
  }, [user]);
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
