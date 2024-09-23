import React, {useState} from "react";

function CreateArea(props) {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");

  function changeTitle(event){
    setTitle(event.target.value);
  }

  function changeContent(event){
    setContent(event.target.value);
  }

  function addNotes(event){
    props.onAdd({title: title, content: content});
    event.preventDefault();
    
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={changeTitle} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={changeContent} value={content}/>
        <button onClick={addNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;