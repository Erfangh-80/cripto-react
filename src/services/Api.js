import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins";

const getCrypto = async (currency, pageNumber) => {
  const response = await axios.get(
    `${BASE_URL}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false`
  );
  return response.data;
};

const getChartCoin = async (id, currency, days = 365) => {
  const response = await axios.get(`${BASE_URL}/${id}/market_chart?vs_currency=${currency}&days=${days}`);
  return response.data;
};

const getCoin = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export { getCrypto, getCoin, getChartCoin };
