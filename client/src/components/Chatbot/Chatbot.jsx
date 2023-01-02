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
      	onChange={setValue}
      	/>

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




/*
const handleSubmit = (event) => {
  event.preventDefault();

  client.authy.services(process.env.TWILIO_AUTHY_SERVICE_SID)
    .verificationChecks
    .create({
      to: value,
      code: OTP_CODE
    })
    .then(verification_check => {
      // OTP code sent successfully
    })
    .catch(error => {
      // Error sending OTP code
    });
}


import { useState } from 'react';
const [otp, setOtp] = useState('');

<form onSubmit={handleVerify}>
  <label>
    OTP:
    <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
  </label>
  <input type="submit" value="Verify OTP" />
</form>

const handleVerify = (event) => {
  event.preventDefault();







const OTPVerificationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');

  return (
    <form>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <label>
        OTP Code:
        <input type="text" value={OTP} onChange={e => setOTP(e.target.value)} />
      </label>
      <br />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPVerificationForm;
Initialize the Twilio client using your Account SID and Auth Token, which can be found in the Twilio Console.
Copy code
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
Add an event handler to the form to send an OTP code to the user's phone number when the form is submitted.
Copy code
const handleSubmit = (e) => {
  e.preventDefault();
  client.authy.services(process.env.TWILIO_AUTHY_SERVICE_SID)
    .verificationChecks
    .create({
      to: phoneNumber,
      code: OTP_CODE
    })
    .then(verification_check => {
      // OTP code sent successfully
    })
    .catch(error => {
      // Error sending OTP code
    });
};

return (
  <form onSubmit={handleSubmit}>
    <!-- Form fields go here -->
  </form>
);
Add another event handler to the form to verify the OTP code when the form is submitted.
Copy code
const handleSubmit = (e) => {
  e.preventDefault();
  client.authy.services(process.env.TWILIO_AUTHY_SERVICE_SID)
    .verificationChecks
    .create({
      to: phoneNumber,
      code: OTP
    })
    .then(verification_check =>



*/