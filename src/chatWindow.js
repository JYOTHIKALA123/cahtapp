import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([
        ...messages,
        { sender: 'You', text: message, time: new Date().toLocaleTimeString() },
      ]);
      setMessage('');
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Chat with UK</h3>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <div className="message-content">
              <span className="sender">{msg.sender}:</span> {msg.text}
            </div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
