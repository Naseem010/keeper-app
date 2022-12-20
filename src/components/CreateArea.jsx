import React,{useState} from "react";
 function CreateArea(props){
    const [note,setInput]=useState({
        title:"",
        content:""
    });
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
    return(
        <div>
            <form>
            <input onChange={handleChange} name="title" type="text" placeholder="Title" value={note.title}/>
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
            <button onClick={submitNote}>add</button>
            </form>
        </div>
    );
 }
 export default CreateArea;