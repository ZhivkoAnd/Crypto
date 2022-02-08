import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  console.log(filteredCoins);

  return (
    <div>
      {filteredCoins.map((coin) => {
        return (
          <div key={coin.id}>
            {coin.name}
            {coin.current_price}
            <div>
              {coin.id === "bitcoin" ? coin.current_price * 0.01001578 : null}
            </div>
            <div>
              {coin.id === "dogecoin" ? coin.current_price * 543 : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
