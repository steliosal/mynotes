import React from "react";
import ListItem from "../components/ListItem";
import Data from "../assets/Data";

function NotesPage({ note }) {
  return (
    <div>
      <h1>
        {Data.map((note, id) => {
          return <ListItem note={note} key={id} />;
        })}
      </h1>
    </div>
  );
}

export default NotesPage;
