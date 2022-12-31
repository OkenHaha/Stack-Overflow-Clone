import React, {useState} from 'react'
import './Chatbot.css'
import ChatBot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from './config'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div>
      <button className="button" onClick={toggleChatbot}>
        Chat with us
      </button>
      {isOpen && (
        <div className="chatbox">
          <ChatBot
            className="bot"
            config={config}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default Chatbot