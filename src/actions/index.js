"use server"

import { redirect } from 'next/navigation'

export const onGetStockInfo = async (stock) => {
    // const stocks = ["AAPL", "TSLA", "NVDA"];
    // let stockData = [];

    // for (const stock of stocks) {
        
    // }

    const url = `https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=GBe7BRNJB17y4SQXPtYmRF0LHpyvOlwj`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data
        } catch (error) {
            console.error('Error:', error);
        }

    // console.log(stockData);  
    // return stockData;  
}


export async function refreshHistory(path) {
    redirect(path)
  }
  
  export async function getMissingKeys() {
    const keysRequired = ['GROQ_API_KEY']
    return keysRequired
      .map(key => (process.env[key] ? '' : key))
      .filter(key => key !== '')
  }