import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {

const getTitle = (note) => {
  const title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45) + "...";
  }
  return title;
};

const getTime = (note) => {
  const time = new Date(note.updated).toLocaleDateString();
  return time;
};

return (
  <div className="notes-list-item">
    <Link to={`/note/${note.id}`}>
      <h3>{getTitle(note)}</h3>
      <p>
        <span>{getTime(note)}</span>
      </p>
    </Link>
  </div>
);
};

export default ListItem;
