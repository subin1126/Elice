const nodemailer = require('nodemailer');

// nodemailer 로 gmail transport 생성하기 
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'subink1126@gmail.com',
        pass: 'wvfmghqznhofznvz',
    },
});

module.exports = (to, subject, text) => new Promise((resolve, reject) => {
  const message = {
    to,
    subject,
    text,
  };
  
  transport.sendMail(message, (err, info) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(info);
  });
});