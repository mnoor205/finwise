// /app/page.js

"use client"; // Ensure this is a Client Component

import { onGetStockInfo } from "@/actions";
import Sidebar from "@/components/sidebar";
import React, { useState, useRef } from "react";
import { GrAddCircle } from "react-icons/gr"; // Importing an upload icon from react-icons

// SVG Component
function HtmlSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="arcs"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [fileName, setFileName] = useState(""); // Default to empty string
  const [isUploading, setIsUploading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // State to track if an inquiry has been made
  const [hasInquired, setHasInquired] = useState(false);

  // Initialize cards with unique IDs
  const initialCards = [
    { id: 1, text: "Help write SQL to generate a report", svg: HtmlSVG },
    { id: 2, text: "Help analyze sales data", svg: HtmlSVG },
    { id: 3, text: "Assist with data visualization", svg: HtmlSVG },
    { id: 4, text: "Optimize database queries", svg: HtmlSVG },
  ];

  // State to manage available cards
  const [cards, setCards] = useState(initialCards);

  // Ref for the hidden file input
  const hiddenFileInput = useRef(null);

  const handleFileSelection = (event) => {
    if (event.target.files?.length) {
      setFileName(event.target.files[0].name);
      // Optionally, handle the file upload here
    }
  };

  const handleUploadClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: inputValue.trim(), sender: "user" },
      ]);
      setInputValue("");
      setIsSending(true);
      setHasInquired(true); // Update the inquiry state

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputValue.trim() }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessages((prev) => [
            ...prev,
            { text: data.reply, sender: "bot" },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: data.error || "Something went wrong.", sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Failed to send message.", sender: "bot" },
        ]);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isSending && inputValue.trim()) {
      handleSendMessage();
    }
  };

  const handleFileUpload = async () => {
    if (!fileName) return;

    const fileInput = hiddenFileInput.current;
    const file = fileInput?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setIsUploading(true);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { text: `File uploaded: ${data.filename}`, sender: "bot" },
        ]);
        // Optionally, use the file path to process the CSV
      } else {
        setMessages((prev) => [
          ...prev,
          { text: data.error || "File upload failed.", sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Failed to upload file.", sender: "bot" },
      ]);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="bg-dark text-white h-screen p-8 flex flex-col justify-center items-center">
      
      <div className="space-y-11 relative h-full w-full">
        {/* Conditionally render the headers only if no inquiry has been made */}
        {!hasInquired && (
          <div className="flex text-5xl font-semibold py-5 items-center justify-center">
            <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Hello, Debian
            </h1>
            <h1 className="text-[#444746]"> . How can I help you today?</h1>
          </div>
        )}

        {/* Conditionally render the cards only if there are cards available and no inquiry has been made */}
        {cards.length > 0 && !hasInquired && (
          <div className="flex flex-wrap gap-4 justify-center">
            {cards.map((card) => (
              <button
                key={card.id}
                className="bg-[#1e1f20] p-4 flex flex-col rounded-xl hover:bg-[rgba(255,255,255,0.08)] text-left w-[12.5rem] h-[12.5rem]"
                onClick={() => {
                  setInputValue(card.text);
                  setHasInquired(true); // Hide headers and cards upon clicking a card
                }}
              >
                <h1 className="text-light">{card.text}</h1>
                <div className="bg-[#131314] rounded-full p-2 w-fit ml-auto mt-auto">
                  <card.svg className="w-6 h-6 stroke-white" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Chat Section */}
        <div className="mt-8 p-4 h-64 overflow-y-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded mb-2 max-w-xs ${
                message.sender === "user"
                  ? "bg-blue-500 self-end text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4">
          <div className="flex items-center bg-[#1e1f20] rounded-full py-2 px-4">
            {/* Upload Button */}
            <button
              onClick={handleUploadClick}
              className="text-gray-400 hover:text-white mr-2"
              aria-label="Upload CSV File"
            >
              <GrAddCircle className="w-5 h-5" />
            </button>
            {/* Hidden File Input */}
            <input
              type="file"
              accept=".csv"
              ref={hiddenFileInput}
              onChange={handleFileSelection}
              className="hidden"
            />
            {/* Input Field */}
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent text-light placeholder-gray-400 focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSending}
            />
            {/* Conditionally Render Send Button */}
            {inputValue.trim() && (
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-full transition duration-200 ease-in-out hover:scale-105"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
