import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [newNote, setNewNote] = React.useState({
        title: "",
        content: ""
    });
    const [isExpanded, setExpanded] = React.useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNewNote( prevNote => {
            return {
                ...prevNote,
                [name]:value
            }
        })
    }

    function handleSubmit (event) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
        <form className="create-note">
            { isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>}
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded? 3 : 1} value={newNote.content}/>
            <Zoom in={isExpanded}>
                <Fab  onClick={handleSubmit}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;