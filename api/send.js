import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, phone, service, location, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "🔥 New Lead",
      text: `
Name: ${name}
Phone: ${phone}
Service: ${service}
Location: ${location}
Message: ${message}
      `
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
