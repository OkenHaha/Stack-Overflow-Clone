import twilio from 'twilio'

const sid = "ACba7bc5cab925fbdd1bffbadcff173ac2"
const tauth = "9d68eface1c5c5fff038d83c2a5c9d52"
const verifySid = "VA564ded3588cf4b6b5cba35a0a2212a75"

const client = twilio(sid, tauth)


export const sendOtp = async (req, res) => {
    const { value } = req.body
    console.log(value)
    try{
    	const verification = await client.verify.services(verifySid).verifications.create({
    		to: value,
    		channel: 'sms'
    	})
    	res.send({verification})
    }
    catch(error) {
    	res.status(500).send(error)
    }
}



export const verifyOtp = async (req, res) => {
	const { value, otp } = req.body
	console.log(value, otp)
	const check = await client.verify
	.services(verifySid)
	.verificationChecks.create({ to: value, code: otp })
	try{
		if(check.status === 'approved') {
			res.send({check})
		}
		else{
			throw new Error('Incorrect otp.')
		}
	}
	catch(error) {
		console.log(error)
		res.send(error) 
	}
}






/*
app.post('/send-email', async (req, res, next) => {
  try {
    const { email } = req.body
    const params = { email }
    const response = await client.otps.email.loginOrCreate(params)
    res.json(response)
  } catch (error) {
    next(error)
  }
})

app.post('/verify-email', async (req, res, next) => {
  try {
    const { method_id, code } = req.body
    const response = await client.otps.authenticate({
      method_id,
      code,
      session_duration_minutes: 15 * 24 * 60,
    })
    console.log(response)
    const { session_token, user_id } = response
    res.cookie('x-stytch-token', session_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      signed: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
    })
    res.json({ user_id })
  } catch (error) {
    next(error)
  }
})
*/