import React, { useState, useEffect } from "react";

// API
import { getCrypto } from "../services/Api";
// components
import Loader from "./Loader.js";
import Coin from "./Coin";

// styles
import styles from "../assets/styles/Landing.module.css"
import Pagination from "./Pagination";
import Title from "./template/Title";

const Landing = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCrypto(1)
      setCoins(data);
    };
    fetchAPI();
  }, []);
  
  
  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const getLimitCoin = async (data) => {
    setCoins(await getCrypto(data))
    window.scrollTo(0,0)
  }

  const newSearch = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <input className={styles.input} type="text" value={search} onChange={searchHandler} placeholder="search....." />
      <div className={styles.coinContainer}>
        <Title />
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
      <Pagination getLimitCoin={getLimitCoin}/>
    </>
  );
};

export default Landing;
