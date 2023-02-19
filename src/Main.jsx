import React, { useContext, useEffect } from "react";
import { fetchJobsApi } from "./apis/fetchJobs";
import JobsContext, { JobsContextProvider } from "./context/JobsContext";
import UserContext from "./context/UserContext";
import AuthenticatedPage from "./routes/AuthenticatedPage";
import UnauthenticatedPage from "./routes/UnauthenticatedPage";
import { sessionStorageUser } from "./utils";

export default function Main() {
  const { user, setuser } = useContext(UserContext);
  useEffect(() => {
    setuser(JSON.parse(window.sessionStorage.getItem(sessionStorageUser)));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <JobsContextProvider>
          <AuthenticatedPage />
        </JobsContextProvider>
      )}
      {!user && <UnauthenticatedPage />}
    </div>
  );
}
