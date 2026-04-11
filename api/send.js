import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, phone, service, location, message } = req.body;

  try {
    // Gmail transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD"
      }
    });

    // email content
    let mailOptions = {
      from: "YOUR_EMAIL@gmail.com",
      to: "YOUR_EMAIL@gmail.com",
      subject: "🔥 New Lead From Website",
      text: `
New Form Submission:

👤 Name: ${name}
📞 Phone: ${phone}
🛠 Service: ${service}
📍 Location: ${location}
💬 Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
