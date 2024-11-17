"use client";

import { useRouter } from "next/navigation";
import "./dashboard.css"; // Import your CSS file

export default function Sidebar() {
  const router = useRouter(); // Hook for navigation

  // Function to handle sidebar navigation
  const handleNavigation = (path) => {
    router.push(path); // Redirects to the given path
  };

  const handleRedirect = () => {
    window.location.href = "http://localhost:3001/";
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Menu</h3>
        <button onClick={() => handleNavigation("/dashboard")}>Home</button>
        <button onClick={handleRedirect}>Assistant</button>
      </div>
    </div>
  );
}
