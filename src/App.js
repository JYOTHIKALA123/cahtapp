import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './chatWindow';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
