import React from "react";
import notes from "../assets/Data";
function SingleNotePage({ match }) {
  let noteId = match.params.id;
  // eslint-disable-next-line
  let SingleNote = notes.find((note) => note.id == noteId);
  return (
    <div>
      <textarea value={SingleNote?.body}></textarea>
    </div>
  );
}

export default SingleNotePage;
