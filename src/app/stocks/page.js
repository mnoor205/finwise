"use client";

import { useState } from "react";
import "./stock.css";

export default function StocksPage() {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [otherStock, setOtherStock] = useState(""); 

  // Expanded stock options
  const stockOptions = [
    { name: "Apple", ticker: "NASDAQ:AAPL" },
    { name: "Tesla", ticker: "NASDAQ:TSLA" },
    { name: "Microsoft", ticker: "NASDAQ:MSFT" },
    { name: "Amazon", ticker: "NASDAQ:AMZN" },
    { name: "Google", ticker: "NASDAQ:GOOGL" },
    { name: "Meta", ticker: "NASDAQ:META" },
    { name: "Nvidia", ticker: "NASDAQ:NVDA" },
    { name: "Intel", ticker: "NASDAQ:INTC" },
    { name: "Netflix", ticker: "NASDAQ:NFLX" },
   
  ];

  const handleSelection = (ticker) => {
    if (selectedStocks.includes(ticker)) {
      setSelectedStocks(selectedStocks.filter((item) => item !== ticker));
    } else {
      setSelectedStocks([...selectedStocks, ticker]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine predefined and custom stock options
    const allSelectedStocks = [...selectedStocks];
    if (otherStock.trim()) {
      allSelectedStocks.push(`Custom: ${otherStock.trim()}`);
    }

    console.log("Selected Stocks:", allSelectedStocks);
    
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Before providing you with the insights and queries, let’s ask you a question for a better experience!</h1>
      <h2>What kind of stocks are you interested in?</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        {stockOptions.map((stock) => (
          <div key={stock.ticker}>
            <label>
              <input
                type="checkbox"
                value={stock.ticker}
                checked={selectedStocks.includes(stock.ticker)}
                onChange={() => handleSelection(stock.ticker)}
              />
              {stock.name} ({stock.ticker})
            </label>
          </div>
        ))}
        <br />
        {/* Other Stock Input */}
        <div>
          <label>
            Other:
            <input
              type="text"
              placeholder="Enter stock name or ticker"
              value={otherStock}
              onChange={(e) => setOtherStock(e.target.value)}
              style={{ marginLeft: "10px", padding: "5px", fontSize: "1rem" }}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
