import { useState, useEffect } from "react";
import CryptoGrid from "./components/CryptoGrid";
import styled from "styled-components";

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
  }, [coins]);

  const filteredCoins = coins.filter((e) => {
    return e.id === "bitcoin" || e.id === "dogecoin";
  });

  return (
    <Container>
      <div className="container">
        <CryptoGrid filteredCoins={filteredCoins}></CryptoGrid>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f3f3f3;
  font-family: "Poppins", sans-serif;
  height: 100vh;
`;

export default App;
