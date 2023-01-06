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
	const [code, setCode] = useState('')

	const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9990
    const randomNumber = Math.floor(Math.random() * (9990 - 1000 + 1)) + 1000;
    //console.log(randomNumber);
    const otp = String(randomNumber)
    return otp;
  	};

	const sendOtp = async (value) => {
		console.log(value)
		try{
			const response = await axios.post('http://localhost:5000/otp/send-otp', {
				value,
			})
			console.log(response.data)
		}
		catch(err) {
			console.error(err)
		}
	}
	const verifyOtp = async (value, otp) => {
		
		//console.log(value, otp)
	  try {
	    const response = await axios.post('http://localhost:5000/otp/verify-otp', {
	      value,
	      otp
	    });
	    console.log('verifing...')
	    console.log(response.data)
	    //console.log(response.data)
	    // console.log("verification in process...")
	     // if (response.status === 'approved') {
	     //   console.log('OTP successfully verified');
	     // } else {
	     //   console.log('Invalid OTP');
	     // } 
	    //console.log("verification in process...")
	  } catch (error) {
	    console.error(error);
	  }
	};
	return (
		<div className="otp">
			<PhoneInput
	      	placeholder="Enter phone number"
	      	value={value}
	      	onChange={setValue}
	      	/>
      	<button type="submit" onClick={() => sendOtp(value)}>otp</button>
      	<br/>
	    <input type="text" onChange={event => setCode(event.target.value)} value={code}/>
	    <p>{code}</p>
	    <button type="submit" onClick={() => verifyOtp(value, code)}>verify</button>
		</div>
	)
}

export default OTP