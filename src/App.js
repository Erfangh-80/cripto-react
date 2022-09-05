import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// styles
import "./App.css";
// components
import Landing from "./components/Landing";
import Navbar from "./components/template/Navbar";
import CoinPage from "./components/CoinPage";
// context
import CryptoContextProvider from "./context/CryptoContextProvider";

function App() {
  return (
    <CryptoContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </CryptoContextProvider>
  );
}

export default App;
