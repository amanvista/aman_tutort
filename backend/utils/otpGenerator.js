const otpGenerator = require('otp-generator')
let generateOtp = ()=>{
    return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
}
module.exports = generateOtp
