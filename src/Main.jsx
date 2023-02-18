import React, { useContext } from "react";
import { JobsContextProvider } from "./context/JobsContext";
import UserContext from "./context/UserContext";
import AuthenticatedPage from "./routes/AuthenticatedPage";
import UnauthenticatedPage from "./routes/UnauthenticatedPage";

export default function Main() {
  const { user } = useContext(UserContext);
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
