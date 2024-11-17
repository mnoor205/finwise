import Sidebar from "@/components/sidebar"; // Import Sidebar component

export default async function DashboardPage() {

  const data = await onGetStockInfo("TSLA")
  console.log(data)
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
            <li><strong>Open Price:</strong> ${results[0].o}</li>
            <li><strong>Close Price:</strong> ${results[0].c}</li>
            <li><strong>High:</strong> ${results[0].h}</li>
            <li><strong>Low:</strong> ${results[0].l}</li>
            <li><strong>Volume:</strong> {results[0].v.toLocaleString()}</li>
            <li><strong>Weighted Avg Price:</strong> ${results[0].vw}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
