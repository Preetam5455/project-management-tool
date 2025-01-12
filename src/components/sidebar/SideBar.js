import React from "react";
import "./SideBar.css";

const SideBar = ({menuItems }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
      <img src="./assets/menu.svg" alt="Icon 1" className="header-icons" />
        <img src="./assets/add.svg" alt="Icon 2" className="header-icons" />
        <img src="./assets/home.svg" alt="Icon 3" className="header-icons" />
        <img src="./assets/search.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/code.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/editFile.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/teamWork.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/diceMenu.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/help.svg" alt="Icon 5" className="header-icons" />
        <img src="./assets/like.svg" alt="Icon 5" className="header-icons" />
      </nav>
    </aside>
  );
};

export default SideBar;
