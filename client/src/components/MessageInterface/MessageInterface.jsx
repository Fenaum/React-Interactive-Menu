import { useState } from "react";
import chat from "../../assets/images/message/chat.svg";
import menuService from "../../utils/menuService";
import "./MessageInterface.css";

export default function MessageInterface({ user }) {
  const [showChat, setShowChat] = useState(false);
  const [tableNumber, setTableNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState(null);

  const handleButtonClick = () => {
    setShowChat(!showChat);
    setStatus(null);
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    if (!tableNumber.trim()) {
      setStatus({ type: "error", text: "Please enter your table number." });
      return;
    }

    const userMsg = { text: message, from: "customer" };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setStatus({ type: "loading", text: "Sending..." });

    try {
      await menuService.callWaiter(tableNumber, message);
      setMessages((prev) => [
        ...prev,
        { text: "Your server has been notified and will be with you shortly.", from: "system" },
      ]);
      setStatus(null);
    } catch (err) {
      setStatus({ type: "error", text: "Failed to send. Please try again." });
    }
  };

  const callWaiter = async () => {
    if (!tableNumber.trim()) {
      setStatus({ type: "error", text: "Please enter your table number." });
      return;
    }
    setStatus({ type: "loading", text: "Calling waiter..." });
    try {
      await menuService.callWaiter(tableNumber, "Waiter requested");
      setMessages((prev) => [
        ...prev,
        { text: "Your waiter has been called! They'll be with you soon.", from: "system" },
      ]);
      setStatus(null);
    } catch (err) {
      setStatus({ type: "error", text: "Failed to call waiter. Please try again." });
    }
  };

  return (
    <div>
      <button className="chat-button" onClick={handleButtonClick}>
        <img className="chat-icon" src={chat} alt="chat-icon" />
      </button>
      {showChat && (
        <div className="chat-interface">
          <div className="chat-header">
            <span>Service Request</span>
            <button className="chat-close" onClick={() => setShowChat(false)}>✕</button>
          </div>

          <div className="chat-table-row">
            <input
              className="chat-table-input"
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="Your table number"
            />
            <button className="chat-waiter-btn" onClick={callWaiter}>
              Call Waiter
            </button>
          </div>

          {status && (
            <p className={`chat-status chat-status--${status.type}`}>{status.text}</p>
          )}

          <div className="chat-messages">
            {messages.length === 0 && (
              <p className="chat-hint">Enter your table number and send a message or call your waiter.</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message--${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={submitMessage} className="chat-form">
            <input
              className="chat-text-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
