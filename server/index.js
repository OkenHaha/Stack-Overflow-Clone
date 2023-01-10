import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { loadStripe }from '@stripe/stripe-js'
import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import otpRoutes from './routes/otp.js'


const app = express();
const stripe = await loadStripe('sk_test_51MMqciSEZ9pOTfziCcCRBHflDHpCyFCJynuiDwGUANw3FXwzRmgiFBsdNYEG02O3MEWK4WAd5XFZ5e7Dw9AhvH9o00QPw8aHyf')

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

app.post('/webhook', bodyParser.raw({type: 'applicatin/json'}), (req, res) => {
    const payload = req.body

    console.log("Got payload: " + payload)

    res.status(200)
})


const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))
