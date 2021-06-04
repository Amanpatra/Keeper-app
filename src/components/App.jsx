import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea"
import Note from "./Note";
import Footer from "./Footer";

function App() {

    const [notes, setNotes] = React.useState([]);

    function addNewNote(note) {
        setNotes( prevNotes => {
            return [ ...prevNotes , note];
        })
    }

    function deleteNote(id) {
        setNotes( prevNotes => {
            return prevNotes.filter( (note, index) => {
                return id!==index;
            })
        })
    }
    
    return (
        <div className="App" >
        <Header />
        <CreateArea onAdd={addNewNote} />
        {notes.map( (note, index) => 
            <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            /> 
        )}
        <Footer />
        </div>
    );
}

export default App;
