import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const chats = [
    { name: 'UK', lastMessage: 'Case Studies', time: '10:28 AM' },
    { name: 'Sha Rude!', lastMessage: 'Main menu', time: '9:15 AM' },
    { name: 'Mr. Crazy', lastMessage: 'Hello', time: 'Yesterday' },
    // Add more chat items as needed
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>WABA Number</h3>
      </div>
      <div className="sidebar-chat-list">
        {chats.map((chat, index) => (
          <div key={index} className="sidebar-chat-item">
            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{chat.lastMessage}</p>
            </div>
            <span className="chat-time">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
