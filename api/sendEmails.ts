import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullName: string;
  email: string;
  about: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { fullName, email, about } =
    req.body as Partial<ContactFormData>;

  if (!fullName || !email || !about) {
    res
      .status(400)
      .send("Missing fields: fullName, email and about are required");
    return;
  }

  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.GMAIL_EMAIL, // Отправитель (ваш email)
    to: "ulakaev@ecitech.online", // Замените на адрес, на который будут приходить сообщения
    subject: `New Contact Form Submission from ${fullName}`,
    text:
      "You have a new contact form submission:\n\n" +
      "Full Name: " +
      fullName +
      "\nEmail: " +
      email +
      "\nMessage: " +
      about,
    html:
      "<p>You have a new contact form submission:</p>" +
      "<p><strong>Full Name:</strong> " +
      fullName +
      "</p>" +
      "<p><strong>Email:</strong> " +
      email +
      "</p>" +
      "<p><strong>Message:</strong><br>" +
      about +
      "</p>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send(String(error));
  }
}
