import React from "react";
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <Weather defaultCity="Porto"/>
      <footer>
        This project was coded by Tatiana Oliveira and is {" "}
        <a href="https://github.com/toliveira90/homework2"
        >
        open-sourced on GitbHub
        </a>
      </footer>
    </div>

  );
}

export default App;
