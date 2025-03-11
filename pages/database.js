import Email from "@/models/Email";
import db from "@/utils/db";

export default async function handler(req, res) {
  const { name, email, phone, message } = req.body;
  try {
    await db.connect();

    const newEmail = new Email({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    const dbEmail = await newEmail.save();
    res.send(dbEmail);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: { message: error.message } });
  }
}
