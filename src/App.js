import React from "react";

// styles
import "./App.css";

// components
import Landing from "./components/Landing";
import Navbar from "./components/template/Navbar";
// context
import CryptoContextProvider from "./context/CryptoContextProvider";

function App() {
  return (
    <CryptoContextProvider>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </CryptoContextProvider>
  );
}

export default App;
