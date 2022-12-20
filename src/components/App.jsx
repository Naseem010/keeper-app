import React ,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
function App(){
    const [notes,setNotes]=useState([]);
    function addNote(newnote){
setNotes(prevNotes=>{
    return [...prevNotes,newnote]
});
    }
    function deleteItem(id){
setNotes((prevNotes)=>{
return prevNotes.filter((noteItem,index)=>{
    return index!==id;
});
});
    }
    return (
    <div> 
    <Header />  
    <CreateArea onAdd={addNote}/>
     {notes.map((noteItem,index)=>{
        return <Note id={index} key={index} title={noteItem.title} content={noteItem.content} deleteItem={deleteItem} />;
     })}
    <Footer />
    </div>
 );
}
export default App;