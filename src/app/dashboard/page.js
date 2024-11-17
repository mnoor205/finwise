"use client";

import Sidebar from "@/components/sidebar"; // Import Sidebar component
import "./Dashboard.css"; // Import your custom CSS

export default function DashboardPage({ data }) {
  // Destructure data passed as a prop
  const { ticker, results } = data;

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
