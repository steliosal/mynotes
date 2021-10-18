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
      <AddButton/>
    </div>
  );
}

export default NotesPage;
