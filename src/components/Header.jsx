import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Header() {
  return (
    <div className="app-header">
      <h1>Notes List</h1>
      <ToggleSwitch className="switch" />
    </div>
  );
}

export default Header;
