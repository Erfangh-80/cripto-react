import React, { useState, useEffect } from "react";

// API
import { getCrypto } from "../services/Api";
// components
import Loader from "./Loader.js";
import Coin from "./Coin";

// styles
import styles from "./Landing.module.css"

const Landing = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCrypto());
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }
  const newSearch = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <input className={styles.input} type="text" value={search} onChange={searchHandler} placeholder="search....." />
      <div className={styles.coinContainer}>
        {coins.length ? (
          <div>
            {newSearch.map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.market_cap_change_percentage_24h}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Landing;
