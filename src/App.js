import React, { useContext, useEffect } from "react";
import "./App.css";
import UserContext, { UserContextProvider } from "./context/UserContext";
import Main from "./Main";
import { sessionStorageUser } from "./utils";

function App() {
  return (
    <div className="app-body">
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </div>
  );
}

export default App;
