import './App.css';
import React from "react";
import ResetCSS from './resetCss';

console.log("There")

function App() {
  return (
    <div>
      <ResetCSS/>
      <div style={{
        backgroundColor:"Black"
      }}>
        <h1> HELLO WORLD h1 </h1>
      </div>
      <h2> HELLO WORLD h2 </h2>
    </div>
  );
}

export default App;
