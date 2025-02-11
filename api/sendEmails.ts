import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// Чтобы Next/Vercel не пытался парсить body как JSON
export const config = {
  api: {
    bodyParser: false,
  },
};

// Интерфейс для текстовых полей (может быть полезен для проверки)
interface ContactFormData {
  fullName: string;
  email: string;
  about: string;
  nda: boolean; // или string, если приходит "true"/"false"
}

// Настройка транспортера
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_LOGIN,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  // Создаём форму для парсинга multipart/form-data
  const form = new formidable.IncomingForm();

  // Парсим запрос
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).send("Error parsing form data");
    }

    // Извлекаем данные полей
    const { fullName, email, about, nda } = fields as Partial<ContactFormData>;

    // Проверяем обязательные поля
    if (!fullName || !email || !about) {
      return res
        .status(400)
        .send("Missing fields: fullName, email, and about are required.");
    }

    // Подготавливаем опции письма
    let mailOptions: nodemailer.SendMailOptions = {
      from: process.env.GMAIL_LOGIN,
      to: "ulakaev@ecitech.online",
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        You have a new contact form submission:

        Full Name: ${fullName}
        Email: ${email}
        Message: ${about}
        NDA: ${nda ? "Yes" : "No"}`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Full Name: </strong> ${fullName}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong><br>${about}</p>
        <p><strong>NDA: </strong> ${nda ? "Yes" : "No"}</p>
      `,
    };

    // Если есть загруженный файл, прикрепим его к письму
    const projectFile = files.projectFile;
    if (projectFile) {
      // Если пользователь мог прикрепить несколько файлов с тем же name,
      // надо учесть, что projectFile может быть массивом
      const fileData = Array.isArray(projectFile)
        ? projectFile[0]
        : projectFile;

      // Читаем файл в буфер
      const buffer = fs.readFileSync(fileData.filepath);

      // Добавляем attachments
      mailOptions.attachments = [
        {
          filename: fileData.originalFilename || "attachment",
          content: buffer,
        },
      ];
    }

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent: " + info.response);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send(String(error));
    }
  });
}
