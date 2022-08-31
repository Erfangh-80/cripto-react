import React from 'react';

//  styles
import styles from "../../assets/styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h3>Crypto Hunter</h3>
            </div>
            <div className={styles.dropDown}>
                <select>
                    <option>USD</option>
                    <option>ERU</option>
                </select>
            </div>
        </div>
    );
};
// #0b0c17
export default Navbar;