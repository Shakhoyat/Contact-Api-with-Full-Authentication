import { Contact } from "../Models/Contact.js";

//create a new contact
export const createContact = async (req, res) => {
  const { name, email, phone, type } = req.body;
  const userId = req.user.id;

  if (!name || !email || !phone) {
    return res.json({ error: "All fields are required" });
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      type,
      user: userId,
    });

    res.json({
      message: "Contact created successfully",
      success: true,
      contact,
    });
  } catch (error) {
    res.json({ error: "Server error" });
  }
};
