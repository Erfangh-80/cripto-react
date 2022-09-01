import React, { useState, useEffect, createContext } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if(currency === "EUR") setSymbol("€")
    else if (currency === "USD") setSymbol("$")
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
