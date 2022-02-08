import CryptoCoin from "./CryptoCoin";
import styled from "styled-components";

const CryptoGrid = ({ filteredCoins }) => {
  return (
    <Container>
      {filteredCoins.map((coin) => {
        return <CryptoCoin coin={coin} key={coin.id}></CryptoCoin>;
      })}
    </Container>
  );
};

export default CryptoGrid;

const Container = styled.div``;
