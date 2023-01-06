import twilio from 'twilio'

const sid = "ACba7bc5cab925fbdd1bffbadcff173ac2"
const tauth = "4cabbffec4d10eaa61e06857f9f1e593"
const verifySid = "VA030336b0e620b55218c7bde0ea638dd7"

const client = twilio(sid, tauth)


export const sendOtp = async (req, res) => {
    const { value } = req.body
    //console.log(value)
    try{
    	console.log(value)
    	const verification = await client.verify.services(verifySid).verifications.create({
    		to: value,
    		channel: 'sms'
    	})
    	res.send({verification})
    }
    catch(error) {
    	res.send(error)
    }
}
 


export const verifyOtp = async (req, res) => {
  const { value, otp } = req.body;
  console.log(value, otp);
  client.verify
    .services(verifySid)
    .verificationChecks.create({ to: value, code: otp })
    .then((check) => {
      if (check.status === 'approved') {
        res.send({
          success: true,
          message: 'OTP verification successful.',
        });
      } else {
        res.send({
          success: false,
          message: 'OTP verification failed.',
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({
        success: false,
        message: error.message,
      });
    });
};






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