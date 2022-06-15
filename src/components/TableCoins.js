import React from "react";
import CoinRow from "./CoinRow";
const titles=['#',"coin" ,"price","price Chane" ,"24 Valume"]
const TableCoins = ({ coins,search }) => {
  const filteredCoins=coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()) ||
  coin.symbol.toLowerCase().includes(search.toLowerCase()) 
  );
  return (
    <div>
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title,index)=>(
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin , index) => (
            <CoinRow coin={coin} key={index} index={index+1} />
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
