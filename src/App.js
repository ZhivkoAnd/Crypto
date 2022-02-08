import "./App.css";
import { useState, useEffect } from "react";
import CryptoGrid from "./components/CryptoGrid";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const fetchedData = await responce.json();
      setCoins(fetchedData);
    };
    fetchData();
  }, []);

  const filteredCoins = coins.filter((e) => {
    return e.id === "bitcoin" || e.id === "dogecoin";
  });

  return (
    <div className="container">
      <CryptoGrid filteredCoins={filteredCoins}></CryptoGrid>
    </div>
  );
}

export default App;
