import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Contact />
    </div>
  );
}

export default App;
