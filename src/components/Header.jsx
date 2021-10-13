import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Link to="/">
        <h1>Notes</h1>
      </Link>
    </div>
  );
}

export default Header;
