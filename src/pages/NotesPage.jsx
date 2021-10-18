import React,{useEffect, useState} from "react";
import ListItem from "../components/ListItem";
// import notes from "../assets/Data";


// theleis na kaneis fetch ta notes apo to db me api call
// se mia useeffect function
// ftiakseis mia async await promise 
// na kaneis fetch ta data
// ta opoia tha kaneis JSON
// k meta assign sto setnotes function



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
    </div>
  );
}

export default NotesPage;
