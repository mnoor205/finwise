"use client";

import "./home.css";



export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to FinWise</h1>
        <p>Your Financial Goals, Simplified.</p>
        <p>FinWise empowers you to make smarter investment decisions with tailored insights.</p>
        <button onClick={() => (window.location.href = "/auth/sign-up")}>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features of FinWise</h2>
        <ul>
          <li>
            <strong>Personalized Stock Insights:</strong> Get stock recommendations based on your unique preferences and financial goals.
          </li>
          <li>
            <strong>Easy-to-Use Platform:</strong> Intuitive design ensures that you can access insights quickly and effortlessly.
          </li>
          <li>
            <strong>Stay Ahead of the Curve:</strong> Leverage real-time market data to make informed investment decisions.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Your data is safe with us. Industry-standard security protocols ensure complete privacy.
          </li>
        </ul>
      </section>

      <section className="how-it-works">
      <h2>How FinWise Works</h2>
      <ol>
        <li>Enter your preferences and goals.</li>
        <li>Get real-time stock insights and recommendations.</li>
       <li>Visualize trends and track your progress.</li>
      </ol>
     </section>


      {/* Footer */}
      <footer>
        <p>© 2024 FinWise. All Rights Reserved.</p>
        <p>
          <a href="/about">About Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}
