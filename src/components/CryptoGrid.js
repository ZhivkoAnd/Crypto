import CryptoCoin from "./CryptoCoin";
import styled from "styled-components";

const CryptoGrid = ({ filteredCoins }) => {
  const combinedExpenses = 513;
  let combinedProfit = null;
  if (filteredCoins.length > 0) {
    combinedProfit = Math.round(
      filteredCoins[0].current_price * 0.01001578 +
        filteredCoins[1].current_price * 543
    );
  }

  return (
    <Container>
      {filteredCoins.map((coin) => {
        return <CryptoCoin coin={coin} key={coin.id}></CryptoCoin>;
      })}
      <h3 className="combinedProfit">
        <span>Your profit is:</span>
        <span>
          ${combinedProfit} - ${combinedExpenses}
        </span>
        <span>=</span>
        <span
          className={combinedProfit - combinedExpenses > 0 ? "profit" : "loss"}
        >
          ${combinedProfit - combinedExpenses}
        </span>
      </h3>
    </Container>
  );
};

const Container = styled.div`
  .combinedProfit {
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
 .profit {
    color: green;
  }

  .loss {
    color: red;
  }
  }
`;

export default CryptoGrid;
