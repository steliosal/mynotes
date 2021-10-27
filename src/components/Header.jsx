import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app-label">
      <Link to={"/"}>
        <h1>My Notebook</h1>
      </Link>
    </div>
  );
}

export default Header;
