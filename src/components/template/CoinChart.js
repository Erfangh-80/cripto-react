import React, { useState, useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Title,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
// context
import { CryptoContext } from "../../context/CryptoContextProvider.js";
// API
import { getChartCoin } from "../../services/Api.js";
import chartDays from "../../services/data.js";
// components
import SelectButton from "./SelectButton.js"
// styles
import styles from "../../assets/styles/CoinChart.module.css"


ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const CoinChart = ({ coinId }) => {
  const [historycallData, setHistorycallData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = useContext(CryptoContext);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getChartCoin(coinId, currency, days);
      setHistorycallData(data.prices);
    };
    fetchAPI();
  }, [currency, days, coinId]);

  const data = {
    labels: historycallData?.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price ( Past ${days} Days ) in ${currency}`,
        data: historycallData?.map((coin) => coin[1]),
        borderColor: "#EEBC1D",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <div className={styles.container}>
      <Line data={data} options={options} />
      <div className={styles.button}>
        {chartDays.map((day) => (
          <SelectButton key={day.value} onClick={() => setDays(day.value)} selected={day.value === days}>{day.label}</SelectButton>
        ))}
      </div>
    </div>
  );
};

export default CoinChart;
