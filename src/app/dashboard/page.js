import { onGetStockInfo } from "@/actions";
import Sidebar from "@/components/sidebar"; 

export default async function DashboardPage() {
  
  const stockData = [
    {
      ticker: "TSLA",
      stockInfo: {
        v: 190283951,
        vw: 121.0363,
        o: 118.96,
        c: 119.77,
        h: 123.52,
        l: 117.11,
      },
    },
    {
      ticker: "NVDA",
      stockInfo: {
        v: 115893642,
        vw: 475.10,
        o: 469.52,
        c: 473.12,
        h: 477.23,
        l: 465.84,
      },
    },
    {
      ticker: "AAPL",
      stockInfo: {
        v: 86849432,
        vw: 174.82,
        o: 172.88,
        c: 173.64,
        h: 175.38,
        l: 171.92,
      },
    },
  ];
  

  // Card data for the dashboard
  const infoCards = [
    {
      title: "What is FinWise?",
      description:
        "FinWise is your personal financial assistant. It provides insights, analysis, and tools to help you make smarter investment decisions.",
    },
    {
      title: "How to Get Started?",
      description:
        "Navigate to the Assistant page to interact with the chatbot or explore insights about stocks. Use the sidebar to switch between features.",
    },
    {
      title: "Features of FinWise",
      description:
        "Access real-time insights, manage your portfolio, and get tailored recommendations for smarter financial planning.",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard!</h1>
        <p className="mt-4 text-lg">Your central hub for managing insights and queries.</p>

        {/* Stock Information Section */}
        <div className="flex flex-wrap justify-between mt-8 gap-6 mb-8 mx-5">
          {stockData.map(({ ticker, stockInfo }, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-72">
              <h3 className="text-xl font-semibold mb-4">{ticker}</h3>
              <ul className="space-y-2">
                <li><strong className="font-medium">Open Price:</strong> ${stockInfo.o}</li>
                <li><strong className="font-medium">Close Price:</strong> ${stockInfo.c}</li>
                <li><strong className="font-medium">High:</strong> ${stockInfo.h}</li>
                <li><strong className="font-medium">Low:</strong> ${stockInfo.l}</li>
                <li><strong className="font-medium">Volume:</strong> {stockInfo.v.toLocaleString()}</li>
                <li><strong className="font-medium">Weighted Avg Price:</strong> ${stockInfo.vw}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Info Cards Section */}
        {/* <div className="info-cards">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
