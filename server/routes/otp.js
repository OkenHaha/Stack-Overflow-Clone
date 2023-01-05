import express from 'express'

import { verifyOtp, sendOtp } from '../controllers/otp.js'
import auth from '../middleware/auth.js'

const router = express.Router()

// router.post('/send-otp',auth, sendOtp)
// router.post('/verify-otp', auth, verifyOtp)

export default router