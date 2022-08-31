import React from "react"

// styles
import "./App.css"

// components
import Landing from "./components/Landing";
import Navbar from "./components/template/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Landing />
    </div>
  );
}

export default App;
