import React, {Component, useState} from "react";
import "./../styles/App.css";


   
function App() {
   
let [button, setButton]=React.useState(null);

let btn = () => {
  setButton("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
}
   
   return (
    <div id="main">
      // Do not alter the main div

    <button id="click" onClick={btn}> click</button>
   <p id="para">{button}</p>
    </div>
  );
}


export default App;
