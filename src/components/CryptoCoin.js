import styled from "styled-components";

const CryptoCoin = ({ coin }) => {
  return (
    <Container>
      <img alt="crypto" className="image" src={coin.image}></img>
      <h3 className="h22">{coin.name}</h3>
      <h3>{coin.current_price}</h3>
      {coin.id === "bitcoin" ? (
        <h3>${Math.round(coin.current_price * 0.01001578)}</h3>
      ) : null}
      {coin.id === "dogecoin" ? (
        <h3>${Math.round(coin.current_price * 543)}</h3>
      ) : null}
    </Container>
  );
};

export default CryptoCoin;

const Container = styled.div`
  padding: 15px 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  -webkit-box-pack: justify;
  justify-content: space-between;

  .image {
    width: 40px;
    height: 40px;
  }
`;
