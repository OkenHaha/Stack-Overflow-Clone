// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCSS = () => {
    const botMessage = createChatBotMessage('CSS is used for the styling of HTML documents. Its full form is Cascading Style Sheets');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDefault = () => {
    const bmsg = createChatBotMessage("Please ask programming related question");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, bmsg],
    }));
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDefault,
            handleCSS,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;