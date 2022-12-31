
import React from "react"
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  customComponents: {
    header: () => <div className="chatHeader"><h3 >ChatBot</h3></div>,
  },
};

export default config