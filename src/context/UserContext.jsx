import React, { createContext, useState } from "react";
import { sessionStorageUser } from "../utils";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, saveuser] = useState();
  const setuser = (userdata) => {
    if (userdata != null)
      window.sessionStorage.setItem(
        sessionStorageUser,
        JSON.stringify(userdata)
      );
    saveuser(userdata);
  };
  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
