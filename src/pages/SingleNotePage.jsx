import React,{useEffect, useState} from "react";

// theleis na kaneis fetch to kathe notee apo to db me to id tou
// se mia useeffect function
// ftiakseis mia async await promise 
// na kaneis fetch ta data
// ta opoia tha kaneis JSON
// k meta assign sto setnotes function


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


 let handleSubmit = () => {
  if (noteId !== "new" && !note.body) {
      deleteNote()
  } else if (noteId !== "new")  {
updateNote()   
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


