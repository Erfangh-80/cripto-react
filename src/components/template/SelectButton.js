import React from "react";

import styles from "../../assets/styles/SelectButton.module.css"

const SelectButton = ({ children, selected, onClick }) => {
  return <span onClick={onClick} className={styles.button}>{children}</span>;
};

export default SelectButton;
