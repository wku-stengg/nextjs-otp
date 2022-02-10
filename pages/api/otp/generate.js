import { setOTP } from "../../../components/cache"

export default function handler(req, res) {
    const { user = 'default' } = req.query
    const otp = String(Math.floor(Math.random()*10000000)).slice(-6)
    setOTP(user,otp)
    res.status(200).json({ user, otp })
}