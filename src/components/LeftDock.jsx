import React from "react";
import * as Unicons from "@iconscout/react-unicons";

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
  },
];

export default function LeftDock() {
  return (
    <div className="col-2 left-dock">
      {dockTiles.map((item, i) => (
        <div className="dock-item row">
          <p className="col-2">{item.icon}</p>
          <p className="col-10">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
