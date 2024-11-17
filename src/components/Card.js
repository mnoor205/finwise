import React from "react";
import "./Card.css"; // Import styles for the Card component

export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
