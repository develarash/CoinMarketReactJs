import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableCoins from "./components/TableCoins";
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=bnb&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
            <h1 className="text-center">coin market</h1>

      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        name=""
        className="form-control bg-dark text-light border-0 mt-4 text-center"
        placeholder="search a coin"
      />
      <div className="row">
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
