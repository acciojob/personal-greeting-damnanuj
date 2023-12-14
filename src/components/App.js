
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");

  function getValue(event){
  // console.log(event.target.value);
  setText(event.target.value);
  }
  return (
    <div>
        <label>Enter your name:</label> <br/>
        <input onChange={getValue} type="text" />
        <p>{text}</p>
    </div>
  )
}

export default App
