import CryptoCoin from "./CryptoCoin";

const CryptoGrid = ({ filteredCoins }) => {
  return (
    <>
      {filteredCoins.map((coin) => {
        return <CryptoCoin coin={coin} key={coin.id}></CryptoCoin>;
      })}
    </>
  );
};

export default CryptoGrid;
