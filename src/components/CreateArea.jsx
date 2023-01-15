import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
 function CreateArea(props){
    const [note,setInput]=useState({
        title:"",
        content:""
    });
    const [isExpand,setExpand]=useState(false);
 function handleChange(event){
    const {name,value}=event.target;
    setInput(prevNote=>{
        return{
...prevNote,
[name]:value
        }
    });
 }
function submitNote(event){
    props.onAdd(note);
    setInput({
        title:"",
        content:""
    });
    event.preventDefault();
};
function Expand(){
    if(isExpand===false){
     setExpand(true);
    }
}
    return(
        <div>
            <form className="create-note">
            {isExpand && <input onChange={handleChange} name="title" type="text" placeholder="Title" value={note.title}/> }
            <textarea onClick={Expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpand?3:1} value={note.content}/>
            <Zoom in={isExpand}>
            <Fab onClick={submitNote}>
            <AddIcon />
            </Fab>
            </Zoom>
            </form>
        </div>
    ); 
 }
 export default CreateArea;