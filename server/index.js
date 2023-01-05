import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import otpRoutes from './routes/otp.js'

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
app.use('/otp', otpRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))

// ACCOUNT_SID
// AUTH_TOKEN
// VERIFY_SERVICE_SID



// app.post('/sent-otp', (req, res) => {
//     const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
//     const verifySid = process.env.VERIFY_SERVICE_SID
    
//     const { to, otp } = req.body
//     client.messages
//     .create({
//         body: `Your OTP is: ${otp}`,
//         to: to,
//     })
//     .then(message => console.log(message.sid))
//     .done()

//     res.send('OTP sent successfully')
// })