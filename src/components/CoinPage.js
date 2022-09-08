import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// API
import { getCoin } from '../services/Api';
import CoinChart from './template/CoinChart';
// components
import CoinInfo from './template/CoinInfo.js';
// styles
import styles from "../assets/styles/CoinPage.module.css"

const CoinPage = () => {

    const [coinData, setCoinData] = useState()

    const params = useParams()
    const id = params.id;

    useEffect(() => {
        const fetchAPI = async () => {
            setCoinData(await getCoin(id))
        }
        fetchAPI()
    },[id])
    return (
        <div className={styles.container}>
            <CoinInfo coinData={coinData}/>
            <CoinChart coinId={id}/>
        </div>
    );
};

export default CoinPage;