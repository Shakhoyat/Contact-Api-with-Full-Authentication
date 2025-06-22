import { Contact } from "../Models/Contact";
import { User } from "../Models/User";

//create a new contact
export const createContact = async (req, res) => {
  const { name, email, phone, type } = req.body;
  const userId = req.user.id;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      type,
      user: userId,
    });

    res.status(201).json({
      message: "Contact created successfully",
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
