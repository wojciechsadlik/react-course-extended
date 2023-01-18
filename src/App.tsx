import React from "react";
import './App.css';

function App() {
  const title = "Messing around with different data";
  const num = 50;
  const arr = [1, 2, 3];
  const rand = Math.random() * 10;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Number: {num}</p>
        <p>Numbers: {arr}</p>
        <p>Random number: {rand}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
