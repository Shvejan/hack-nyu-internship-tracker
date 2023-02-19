import React from "react";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import Main from "./Main";

function App() {
  // const user = useContext(UserContext);
  return (
    <div className="app-body">
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </div>
  );
}

export default App;
