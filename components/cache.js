const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

export const setOTP = (user, otp) => {
    myCache.set(user,otp)
}

export const verifyOTP = (user, otp) => (myCache.get(user) === otp)

