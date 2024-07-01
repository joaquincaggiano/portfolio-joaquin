const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yahoo",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

export const sendMail = async (to: string, subject: string, html: string) => {
  return await transporter.sendMail({
    priority: "high",
    from: process.env.SMTP_USER,
    to,
    subject,
    html
  });
}