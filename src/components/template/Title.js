import React from 'react';

import styles from "../../assets/styles/Title.module.css"

const Title = () => {
    return (
        <div className={styles.container}>
            <span className={styles.name}>Name</span>
            <span className={styles.symbol}>Symbol</span>
            <span className={styles.currentPrice}>current Price</span>
            <span className={styles.greenPriceChange}>price Change</span>
            <span className={styles.symbol}>market Cap</span>
        </div>
    );
};

export default Title;