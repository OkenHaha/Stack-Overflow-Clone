import twilio from 'twilio'

const sid = "ACba7bc5cab925fbdd1bffbadcff173ac2"
const tauth = "251b800df82c3dfeec6d8072ca231e3b"
const verifySid = "VA564ded3588cf4b6b5cba35a0a2212a75"

const client = twilio(sid, tauth)


export const sendOtp = async (req, res) => {
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



export const verifyOtp = async (req, res) => {
	const { to, otp } = req.body

	client.verify
	.services(verifySid)
	.verificationChecks.create({
		to: to,
		code, otp
	})
	.then(check => {
		console.log(check.status)
		res.send(check.status)
	})
	.catch(error => {
		console.log(error(error))
		res.send(error)
	})
}