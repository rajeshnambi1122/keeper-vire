import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(Note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  const [isExpanded, setisExpanded] = useState(false);

  function handleClick(){
   setisExpanded(true)
  } 

  return (
    <div>
      <form>
        {isExpanded ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={Note.title}
        /> : null
      }
        <textarea
          required="true"
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={Note.content}
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
