import React from "react";
import "./LayoutHeader.css";
const LayoutHeader = ({ projectName }) => {
    return (
      <header className="header">
      <div className="project-name-header">{projectName}</div>
      <div className="icons">
        <img src="./assets/search.svg" alt="Icon 1" className="header-icons" />
        <img src="./assets/filter.svg" alt="Icon 2" className="header-icons" />
        <img src="./assets/announcment.svg" alt="Icon 3" className="header-icons" />
        <img src="./assets/notification.svg" alt="Icon 4" className="header-icons" />
        <img src="./assets/avatar.jpg" alt="Icon 5" className="header-icons header-avatar" />
        <img src="./assets/downicon.svg" alt="Icon 5" className="header-icons" />
      </div>
    </header>
    );
  };

  export default LayoutHeader;