const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '616036859659-sq3jkgroh5ggrg1ok1v64862a13apvr6.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04I8kWdZhPIHRCgYIARAAGAQSNwF-L9Ir4q1tuXjYF5FrUgVF_Vtoxfru0YsstBeV6sYON7zIhcej4LUvtSz0u_czqhh7QpUu4ek';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      auth: {
        type: 'OAuth2',
        user: 'amanvistaa@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Tutort Academy<amanvistaa@gmail.com>',
      to: 'amanvista@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));