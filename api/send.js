export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, phone, service, location, message } = req.body;

    // simple validation
    if (!name || !phone || !service || !location) {
      return res.status(400).json({ message: "Missing fields" });
    }

    console.log("New Form Submission:");
    console.log({ name, phone, service, location, message });

    // HERE you can:
    // - send email
    // - store in database
    // - send WhatsApp API

    return res.status(200).json({
      success: true,
      message: "Form received successfully!"
    });

  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
}
