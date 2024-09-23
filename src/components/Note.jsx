import React from "react"


function Note(props){
    return (
        <div key={props.id} id={props.id} className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button class="delete_button" onClick={()=>{props.filterNotes(props.id)}}>Delete</button>
        </div>
    )
    
}

export default Note;