// ChatBot.js
import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import ChatReaply from '../Json/ChatBot.json'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to my portfolio app! What would you like to ask about Harpal?" }
  ]);
  const [input, setInput] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 3000); // 3 sec delay
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);

    const msg = input.trim().toLowerCase(); // normalize user input

    setTimeout(() => {
      let reply = "";

      // English match (case-insensitive)
      const englishMatch = ChatReaply.find(item =>
        item.language === "english" &&
        item.keywords.some(k => k.trim().toLowerCase() === msg)
      );

      // Hinglish match (case-insensitive)
      const hinglishMatch = ChatReaply.find(item =>
        item.language === "hinglish" &&
        item.keywords.some(k => k.trim().toLowerCase() === msg)
      );

      if (englishMatch) reply = englishMatch.response;
      else if (hinglishMatch) reply = hinglishMatch.response;
      else {
        // Default response if no match
        const defaultMsg = ChatReaply.find(item => item.keywords.length === 0 && item.language === "english");
        reply = defaultMsg.response;
      }

      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {showLogo && (
        <div className={`chatbot-logo ${isOpen ? "hide" : "fade-in"}`} onClick={toggleChat}>
          🤖
        </div>
      )}

      {isOpen && (
        <div className="chatbot-container fade-in">
          <div className="chatbot-header">
            ChatBOT AI <span className="chatbot-close" onClick={toggleChat}>✕</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message ${msg.from === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
