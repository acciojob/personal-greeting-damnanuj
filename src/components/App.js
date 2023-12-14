
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");
  
  function getValue(event){
  // console.log(event.target.value);
  let greet = `Hello ${event.target.value}`
  setText(greet)
  // setText(event.target.value);
  
  }
  return (
    <div>
      <form>
        <label>Enter your name:</label>
        <input onChange={getValue} type="text" />
      </form>
        <p>{text}</p>
    </div>
  )
}

export default App
