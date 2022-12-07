import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App(){
    return (<div> 
    <Header />
     {notes.map(message =>(
    <Note
    key={message.key}
    title={message.title}
    content={message.content}
    />
    ))}
    <Footer />
    </div>
   
 );
}
export default App;