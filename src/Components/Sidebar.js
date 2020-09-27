import { FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Clever programmer</h2>
        <h3>
          <FiberManualRecord />
          Roshoun Watt
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
