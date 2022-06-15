import React from "react";

const CoinRow = ({ coin, index }) => {

  return (
    <tr key={coin.name}>
      <td>{index}</td>

      <td>
        <img
          className="img-fluid m3-4"
          style={{ width: "4%" }}
          src={coin.image}
          alt={coin.name}
        />{" "}
        <span>{coin.name}</span>
        <span style={{color:'orangered',margin:"0 10px" ,fontSize:"10px",textTransform: "uppercase"}} >{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td
      className={coin.price_change_percentage_24h>0 ?"text-success":"text-danger"}
      >{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>{coin.high_24h}</td>
    </tr>
  );
};

export default CoinRow;
