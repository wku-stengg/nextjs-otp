import { verifyOTP } from "../../../components/cache"

export default function handler(req, res) {
    const { user = 'default', otp = '123456' } = req.query
    res.status(200).json({ user, otp, verified: verifyOTP(user,otp) })
}