import React,{useEffect, useState} from "react";


function SingleNotePage({ match, history }) {

  let noteId = match.params.id;
  
  const [note, setNote] = useState(null);

  useEffect( () => {
  
    getNote()
    
  },[noteId])

let getNote = async () => {
  let response = await fetch(`http://localhost:5000/notes/${noteId}`)
  let data = await response.json()
setNote(data)
} 

 const updateNote = async () => {
  await fetch(`http://localhost:5000/notes/${noteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...note, "updated": new Date()})
  })
 }

let deleteNote = async () => {
  await fetch(`http://localhost:5000/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({note})
  })
  history.push("/")
}

const createNote = async () => {
  await fetch(`http://localhost:5000/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...note, "updated": new Date()})
  })
 }

 let handleSubmit = () => {
  if (noteId !== "new" && !note.body) {
      deleteNote()
  } else if (noteId !== "new")  {
      updateNote()   
  } else if (noteId === "new") {
     createNote()
  }
   history.push("/")
 }



  return (
    <div>
      <button onClick = {handleSubmit}>Home</button>
      <textarea onChange={(e) => setNote({...note, "body": e.target.value})} value={note?.body}></textarea>
      <button onClick ={deleteNote}>Delete</button>
   </div>
  );

}


export default SingleNotePage;


