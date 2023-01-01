import React, {useState} from 'react'
import './Chatbot.css'
import ChatBot from 'react-chatbot-kit'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from './config'


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState()
  const [isVerified, setIsVerified] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  const one = true
  const tri = () => {
    setIsVerified(!isVerified);
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
        {one && (
            <button onClick={tri} className="button2">
              Click me
            </button>
          )}

        <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>

        {isVerified && (
          <ChatBot
            className="bot"
            config={config}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot