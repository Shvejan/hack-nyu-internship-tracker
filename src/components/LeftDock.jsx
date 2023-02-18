import React from "react";

const dockTiles = [
  {
    title: "Dashboard",
    link: "/",
  },

  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Search",
    link: "/search",
  },
  {
    title: "Logout",
    link: "/logout",
  },
];

export default function LeftDock() {
  return (
    <div className="">
      {dockTiles.map((item, i) => (
        <div className="dock-item">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
