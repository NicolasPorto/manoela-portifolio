const nodemailer = require("nodemailer");
const SMPT_CONFIG = require('./config/smtp');
    

const transport = nodemailer.createTransport({
    host: SMPT_CONFIG.host,
    port: SMPT_CONFIG.port,
    secure: false,
    auth: {
        user: SMPT_CONFIG.user,
        pass: SMPT_CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
});


async function run() {
  const mailSent = await transport.sendMail({
    text: "TEXTO EMAIL",
    subject: "ASSUNTO",
    from: 'Nicolas <mano.oelasz@gmail.com>',
    to: ['mano.oelasz@gmail.com']
  });
}

run();