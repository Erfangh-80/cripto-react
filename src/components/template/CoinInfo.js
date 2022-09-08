import React from "react";
import { useContext } from "react";
import parse from 'html-react-parser';

// context
import {CryptoContext} from "../../context/CryptoContextProvider.js"
// styles
import styles from "../../assets/styles/CoinInfo.module.css"

const CoinInfo = ({coinData}) => {

  const { symbol, currency } = useContext(CryptoContext)

  return (
    <div className={styles.container}>
      
      <div className={styles.name}>
        <img src={coinData?.image.large} alt={coinData?.name} />
        <h2>{coinData?.name}</h2>
      </div>

      <div className={styles.description}>
        <p>{parse(`${coinData?.description.en.split(". ")[0]}`)}</p>
      </div>

      <div className={styles.rank}>
        <p>Rank: </p> 
        <span> {coinData?.market_cap_rank}</span>
      </div>

      <div className={styles.currentPrice}>
        <p>Current Price: </p> 
        <span> {symbol} {coinData?.market_data.current_price[currency.toLowerCase()].toLocaleString()}</span>
      </div>

      <div className={styles.marketCap}>
        <p>Market Cap :</p> 
        <span> {symbol} {coinData?.market_data.market_cap[currency.toLowerCase()].toLocaleString()}</span>
      </div>

    </div>
  );
};

export default CoinInfo;
