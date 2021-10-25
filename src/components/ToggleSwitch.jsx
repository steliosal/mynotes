import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div className="toggle-container">
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
    </div>
  );
};

export default ToggleSwitch;
