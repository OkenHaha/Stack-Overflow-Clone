import twilio from 'twilio'

const client = twilio("ACba7bc5cab925fbdd1bffbadcff173ac2", "251b800df82c3dfeec6d8072ca231e3b")
const verifySid = "VA564ded3588cf4b6b5cba35a0a2212a75"


export const sendOtp = async (req, res) => {
    const client = twilio("ACba7bc5cab925fbdd1bffbadcff173ac2", "251b800df82c3dfeec6d8072ca231e3b")
    const verifySid = "VA564ded3588cf4b6b5cba35a0a2212a75"
    
    const { to, otp } = req.body
    client.messages
    .create({
        body: `Your OTP is: ${otp}`,
        to: to,
    })
    .then(message => console.log(message.sid))
    .done()

    res.send('OTP sent successfully')
	}



export const verifyOtp = async (to, otp) => {
	try {
		const response = await axios.post('http://localhost:5000/verify-otp', {
			to,
			otp
		})
		console.log(response.data)
	}
	catch(error) {
		console.log(error)
	}
}