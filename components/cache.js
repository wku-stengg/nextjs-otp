const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 60, checkperiod: 120 });

export const setOTP = (user, otp) => {
    myCache.set(user,otp)
}

export const verifyOTP = (user, otp) => (myCache.get(user) === otp)

