import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export type Crypto = {
  id: string;
  name: string;
  price_usd: string;
  symbol: string;
  volume24: number;
  volume24a: number;
};

function App() {
  const [cryptos, setCryptos] = useState<Crypto[] | null>(null);
  useEffect(() => {
    const url = "https://api.coinlore.net/api/tickers/";
    axios(url).then((response) => {
      setCryptos(response.data.data);
    });
  }, []);
  return (
    <div className="App">
      {cryptos
        ? cryptos.map((crypto) => {
            return <p>{crypto.name + " $" + crypto.price_usd}</p>;
          })
        : null}
    </div>
  );
}

export default App;
