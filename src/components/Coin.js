import React, { useContext } from 'react';

// styles
import styles from "../assets/styles/Coin.module.css";
// context
import { CryptoContext } from '../context/CryptoContextProvider';

const Coin = ({name, rank, image, symbolName, price, marketCap, priceChange}) => {
    
    const {symbol} = useContext(CryptoContext)

    return (
        <div className={styles.container}>
            <span>{rank}</span>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name} >{name}</span>
            <span className={styles.symbol} >{symbolName.toUpperCase()}</span>
            <span className={styles.currentPrice} >{symbol} {price ? price.toLocaleString() : "0"}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange ? priceChange.toFixed(2) : "0"}</span>
            <span className={styles.marketCap} >{symbol} {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
