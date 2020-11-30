import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleComponent from "./SimpleComponent";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Project Mini-Mek</h2>
        <SimpleComponent />
      </header>
    </div>
  );
};

export default App;
