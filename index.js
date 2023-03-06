const randomOtp = (length, options) => {
  
  let OTP = '';

  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  
  length = length || 4;
  let data = options?.alpha ? alpha : numbers;
  
  data = options?.lower ? data.toLowerCase() : data;
  
  for (let i = length; i > 0; --i) {
    OTP += data[Math.floor(Math.random() * data.length)];
  };
  
  return OTP;
};


module.exports = randomOtp;
