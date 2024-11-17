"use server"

export const onGetStockInfo = async () => {
    const stocks = ["AAPL", "TSLA", "NVDA"];
    let stockData = [];

    for (const stock of stocks) {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=VY1JPSH5MVLNAKGX`;

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
            stockData.push(data);  
        } catch (error) {
            console.error('Error:', error);
        }
    }

    console.log(stockData);  
    return stockData;  
}
