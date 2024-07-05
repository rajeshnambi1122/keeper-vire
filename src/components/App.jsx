import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setnotes] = useState([]);

  function addNote(newnote) {
    setnotes(prevnotes => {
      return [...prevnotes, newnote];
    });
  }

  function deleteNote(id){
   setnotes(prevnotes => {
    return prevnotes.filter((noteItem, index)=> {
      return index!== id
    })
   })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} delete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
