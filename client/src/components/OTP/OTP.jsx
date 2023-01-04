import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'
//import randomNumber from 'random-number-csprng';

import './OTP.css'

// const generateOtp = async () => {
//   // Generate a random number between 1000 and 9999
//   const otp = await randomNumber(1000, 9999);
//   return otp.toString();
// };
//const client = require('twilio')(accountSid, authToken);
const OTP = () => {
	const [value, setValue] = useState()

	const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9990
    const randomNumber = Math.floor(Math.random() * (9990 - 1000 + 1)) + 1000;
    console.log(randomNumber);
  	};

	const handleSubmit = () => {
		axios.post('/send-otp', {
		  toPhoneNumber: value,
		  otp: '123456'
		});
	}

	return (
		<div className="otp">
			<PhoneInput
	      	placeholder="Enter phone number"
	      	value={value}
	      	onChange={setValue}
	      	/>
      	<button type="submit" onClick={generateRandomNumber}>Send OTP</button>
		</div>
	)
}

export default OTP