import React, { useState } from 'react';
import ChatBot from 'react-chatbot-kit';

import './style.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  const [isVerified, setIsVerified] = useState(false)
  const tri = () => {
    setIsVerified(!isVerified)
  }

  const one = true

  return (
    <div>
      <button className="button" onClick={toggleChatbot}>
        Chat with us
      </button>
      {isOpen && (
        <div className="chatbox">
          {one && (
        <button onClick={tri} className="button2">Click me</button>
        )}
          {isVerified && (
          <ChatBot
            className="bot"
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
          )}
        </div>
      )}
    </div>
  );
}
