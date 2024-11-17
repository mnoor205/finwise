"use client";

import Sidebar from "@/components/sidebar"; // Import Sidebar component
import Card from "@/components/Card"; // Import Card component

export default function DashboardPage() {
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
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to Your Dashboard!</h1>
        <p>Your central hub for managing insights and queries.</p>

        {/* Card Container */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          {infoCards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
