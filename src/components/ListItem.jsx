import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div className="notes-list-item">
      <Link to={`/note/${note.id}`}>
        <li>{note.body}</li>
      </Link>
    </div>
  );
};

export default ListItem;
