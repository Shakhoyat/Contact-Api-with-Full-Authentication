import { Contact } from "../Models/Contact.js";

// Get all contacts
export const getAllContact = async (req, res) => {
  try {
    const userContact = await Contact.find();

    if (!userContact || userContact.length === 0)
      return res
        .status(404)
        .json({ message: "No contacts exist", success: false });

    res
      .status(200)
      .json({ message: "All contacts fetched", userContact, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Create new contact
export const newContact = async (req, res) => {
  try {
    const { name, email, phone, type } = req.body;

    if (!name || !email || !phone || !type)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const saveContact = await Contact.create({
      name,
      email,
      phone,
      type,
      user: req.user,
    });

    res.status(201).json({
      message: "Contact saved successfully!",
      saveContact,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Update contact by ID
export const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, phone, type } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        type,
      },
      { new: true }
    );

    if (!updatedContact)
      return res
        .status(404)
        .json({ message: "No contact exists", success: false });

    res.status(200).json({
      message: "Contact updated successfully!",
      updatedContact,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Delete contact by ID
export const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteContact = await Contact.findByIdAndDelete(id);

    if (!deleteContact)
      return res
        .status(404)
        .json({ message: "No contact exists", success: false });

    res.status(200).json({
      message: "Contact deleted successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Get contact by ID
export const getContactById = async (req, res) => {
  try {
    const id = req.params.id;

    const userContact = await Contact.findById(id);
    if (!userContact)
      return res
        .status(404)
        .json({ message: "No contact found", success: false });

    res
      .status(200)
      .json({ message: "Contact fetched", userContact, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Get contacts by user ID
export const getContactByUserId = async (req, res) => {
  try {
    const id = req.params.id;

    const userContact = await Contact.find({ user: id });
    if (!userContact || userContact.length === 0)
      return res
        .status(404)
        .json({ message: "No contacts found", success: false });

    res.status(200).json({
      message: "User-specific contacts fetched",
      userContact,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};
