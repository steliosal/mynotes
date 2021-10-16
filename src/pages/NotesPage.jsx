import React from "react";
import ListItem from "../components/ListItem";
import notes from "../assets/Data";

function NotesPage({ note }) {
  return (
    <div>
      <div>
        <h1>&#9782;Notes</h1>
        <p>{notes.length}</p>
      </div>
      <h1>
        {notes.map((note, id) => {
          return <ListItem note={note} key={id} />;
        })}
      </h1>
    </div>
  );
}

export default NotesPage;
