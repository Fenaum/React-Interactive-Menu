import React, { useState } from "react";
import chat from "../../assets/images/message/chat.svg";
import "./MessageInterface.css";

export default function MessageInterface() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleButtonClick = () => {
    setShowChat(!showChat);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div>
      <div></div>
      <button className="chat-button" onClick={handleButtonClick}>
        <img className="chat-icon" src={chat} alt="chat-icon" />
      </button>
      {showChat && (
        <div className="chat-interface">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <form onSubmit={submitMessage}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
