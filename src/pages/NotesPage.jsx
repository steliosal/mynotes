import React,{useEffect, useState} from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";



function NotesPage({ note }) {

const [notes, setNotes] = useState([]);

useEffect(() => {
getNotes()
}, [])

const getNotes = async () => {
  let response = await fetch("http://localhost:5000/notes")
  let data = await response.json()
  setNotes(data)
}

  return (
    <div className="notes">
      <div className="notes-header">
        <h1 className="notes-title">&#9782;Notes</h1>
        <p className="notes-count">{notes.length}</p>
      </div>
      <h2 className="notes-list">
        {notes.map((note, index) => {
          return <ListItem note={note} key={index} />;
        })}
      </h2>
      <AddButton />
    </div>
  );
}

export default NotesPage;
