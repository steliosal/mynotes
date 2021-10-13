import React from "react";
import notes from "../assets/Data";

function SingleNotePage({ match }) {
  let noteId = match.params.id;
  let SingleNote = notes.find((note) => note.id == noteId);
  return (
    <div>
      <p>{SingleNote?.body}</p>
    </div>
  );
}

export default SingleNotePage;
