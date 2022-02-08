import styled from "styled-components";

const CryptoCoin = ({ coin }) => {
  return (
    <Container>
      <h2>{coin.name}</h2>
      <h2>{coin.current_price}</h2>
      {coin.id === "bitcoin" ? (
        <h2> $ {Math.round(coin.current_price * 0.01001578)}</h2>
      ) : null}
      {coin.id === "dogecoin" ? (
        <h2> $ {Math.round(coin.current_price * 543)}</h2>
      ) : null}
    </Container>
  );
};

export default CryptoCoin;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
`;
