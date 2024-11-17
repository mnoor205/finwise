import { onGetStockInfo } from "@/actions";
import Sidebar from "@/components/sidebar"; // Import Sidebar component

export default async function DashboardPage() {
  // Fetch stock information for TSLA
  const data = await onGetStockInfo("TSLA");
  console.log(data);  // Log the data to inspect it

  // Extract stock info from the response data
  const { ticker, results } = data;  // Assuming `results` is an array with the stock info
  const stockInfo = results[0];  // Since there's only one stock result

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
      <div className="main-content">
        <h1>Welcome to Your Dashboard!</h1>
        <p>Your central hub for managing insights and queries.</p>

        {/* Stock Information Section */}
        <div className="stock-card">
          <h3>{ticker}</h3>
          <ul>
            <li><strong>Open Price:</strong> ${stockInfo.o}</li>
            <li><strong>Close Price:</strong> ${stockInfo.c}</li>
            <li><strong>High:</strong> ${stockInfo.h}</li>
            <li><strong>Low:</strong> ${stockInfo.l}</li>
            <li><strong>Volume:</strong> {stockInfo.v.toLocaleString()}</li>
            <li><strong>Weighted Avg Price:</strong> ${stockInfo.vw}</li>
          </ul>
        </div>

        {/* Info Cards Section */}
        <div className="info-cards">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
