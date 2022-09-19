import './App.css';
import React from "react";
import ResetCSS from './resetCss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

console.log("There")

function App() {
  return (
    <>
      <ResetCSS />
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
              <div style={{
                backgroundColor: "Black"
              }}>
                <h1> HELLO WORLD h1 ALGO </h1>
              </div>
              <h2> HELLO WORLD h2 </h2>
            </div>} 
          />
          <Route exact path="/about" element={
            <div>
              <div style={{
                backgroundColor: "Black"
              }}>
                <h1> HELLO WORLD h1 ABOUT </h1>
              </div>
              <h2> HELLO WORLD h2 </h2>
            </div>} 
          />
          <Route exact path="/test" element={
            <div>
              <div style={{
                backgroundColor: "Black"
              }}>
                <h1> HELLO WORLD h1 TEST </h1>
              </div>
              <h2> HELLO WORLD h2 </h2>
            </div>} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
