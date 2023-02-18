import React, { useContext } from "react";
import "./App.css";
import UserContext, { UserContextProvider } from "./context/UserContext";
import Main from "./Main";

function App() {
  const user = useContext(UserContext);
  return (
    <div className="app-body">
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </div>
  );
}

export default App;
