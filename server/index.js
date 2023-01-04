import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import Twilio from 'twilio'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

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

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))



app.post('/sent-otp', () => {
    exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    const verifySid = event.verifySid;
    const phoneNumber = event.phoneNumber;
    const otp = event.otp;

    client.verify
        .services(verifySid)
        .verifications.create({
        to: phoneNumber,
        code: otp
        })
        .catch(err => {
        callback(err);
        });
    }
})