import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'

import './OTP.css'

const OTP = () => {
	const [value, setValue] = useState()
	const [code, setCode] = useState('')

	const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9990
    const randomNumber = Math.floor(Math.random() * (9990 - 1000 + 1)) + 1000;
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
	    if (response.data.success) {
	      console.log(response.data.message);
	      localStorage.setItem("verified", JSON.stringify(response.data.success))
	    } else {
	      console.error(response.data.message);
	    }
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
      	<button type="submit" onClick={() => sendOtp(value)}>send otp</button><br/>
	    <input type="text" onChange={event => setCode(event.target.value)} value={code}/>
	    <button type="submit" onClick={() => verifyOtp(value, code)}>verify otp</button>
		</div>
	)
}

export default OTP