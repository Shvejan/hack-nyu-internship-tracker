import React, { useContext } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { sessionStorageUser } from "../utils";
import UserContext from "../context/UserContext";

export default function LeftDock() {
  const { setuser } = useContext(UserContext);
  const dockTiles = [
    {
      title: "Dashboard",
      link: "/",
      icon: <Unicons.UilDashboard />,
    },

    {
      title: "Profile",
      link: "/profile",

      icon: <Unicons.UilUser />,
    },
    {
      title: "Search",
      link: "/search",
      icon: <Unicons.UilSearch />,
    },
    {
      title: "Logout",
      link: "/logout",
      icon: <Unicons.UilSignout />,
      clickFunction: () => {
        window.sessionStorage.removeItem(sessionStorageUser);
        setuser(null);
      },
    },
  ];

  return (
    <div className="col-2 left-dock">
      {dockTiles.map((item, i) => (
        <div className="hover-div row" onClick={item.clickFunction}>
          <p className="col-2">{item.icon}</p>
          <p className="col-10">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
