import React, { useContext } from "react";
import { JobsContextProvider } from "./context/JobsContext";
import UserContext from "./context/UserContext";
import AuthenticatedPage from "./routes/AuthenticatedPage";
import UnauthenticatedPage from "./routes/UnauthenticatedPage";

export default function Main() {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {user && (
        <JobsContextProvider>
          <AuthenticatedPage />
        </JobsContextProvider>
      )}
      {!user && <UnauthenticatedPage />}
    </div>
  );
}
