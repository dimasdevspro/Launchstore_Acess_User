const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0b6722021652a1",
      pass: "67abc594405f4f"
    }
  });

  