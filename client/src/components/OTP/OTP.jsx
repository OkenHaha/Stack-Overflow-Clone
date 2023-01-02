import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import './OTP.css'

const OTP = () => {
	const [value, setValue] = useState()

	const handleSubmit = () => {
		console.log("button clicked")
	}

	return (
		<div className="otp">
			<PhoneInput
      	placeholder="Enter phone number"
      	value={value}
      	onChange={setValue}
      	/>
      	<button type="submit" onClick={handleSubmit}>Send OTP</button>
		</div>
	)
}

export default OTP