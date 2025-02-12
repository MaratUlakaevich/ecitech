import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = (
  req: VercelRequest,
  res: VercelResponse
) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    // Создаём «форму» для парсинга multipart/form-data через новую версию formidable
    const form = formidable({ multiples: true });

    // Парсим запрос
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Form parse error:", err);
        return res.status(500).send("Error parsing form data");
      }

      // Извлекаем поля
      const { fullName, company, email, phone, about, nda } = fields;

      // Проверяем обязательные поля
      if (!fullName || !email || !about) {
        return res
          .status(400)
          .send("Missing fields: fullName, email, and about are required.");
      }

      // Подготавливаем почтовый транспортер
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

      // Формируем письмо
      let mailOptions: nodemailer.SendMailOptions = {
        from: process.env.GMAIL_LOGIN,
        to: "ulakaev@ecitech.online",
        subject: `New Contact Form Submission from ${fullName} ${company ? "- " + company : ""}`,
        text: `
          You have a new contact form submission:

          Full Name: ${fullName}
          ${company ? "Company: " + company : ""}
          Email: ${email}
          ${phone ? "Phone number: " + phone : ""}
          Message: ${about}
          NDA: ${nda ? "Yes" : "No"}
        `,
        html: `
          <p>You have a new contact form submission:</p>
          <p><strong>Full Name:</strong> ${fullName}</p>
          ${company ? "<p><strong>Company:</strong> " + company + "</p>": ""}
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? "<p><strong>Phone number:</strong> " + phone + "</p>": ""}
          <p><strong>Message:</strong><br>${about}</p>
          <p><strong>NDA:</strong> ${nda ? "Yes" : "No"}</p>
        `,
      };

      // Проверяем наличие загруженного файла (например, projectFile)
      const projectFile = files.projectFile;
      if (projectFile) {
        // Если projectFile может быть массивом, берём первый элемент:
        const fileData = Array.isArray(projectFile)
          ? projectFile[0]
          : projectFile;

        // Читаем файл из временной папки
        const buffer = fs.readFileSync(fileData.filepath);

        // Добавляем вложение (attachment)
        mailOptions.attachments = [
          {
            filename: fileData.originalFilename || "attachment",
            content: buffer,
          },
        ];
      }

      // Отправляем письмо
      try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent: " + info.response);
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send(String(error));
      }
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal server error");
  }
}

export default handler;