import React, { useContext } from "react";

//  styles
import styles from "../../assets/styles/Navbar.module.css";

import { CryptoContext } from "../../context/CryptoContextProvider.js";

const Navbar = () => {
  const { currency, setCurrency } = useContext(CryptoContext);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>Crypto Hunter</h3>
      </div>
      <div className={styles.dropDown}>
        <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  );
};
// #0b0c17
export default Navbar;
