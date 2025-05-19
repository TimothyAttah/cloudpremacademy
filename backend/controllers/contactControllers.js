import Contact from '../models/contactModel.js';

const contactControllers = {
  contactMessage: async (req, res) => {
    try {
      const { name, subject, email, message } = req.body;

      if (!name)
        return res.status(400).json({ msg: 'Please enter your name.' });

      if (!email)
        return res.status(400).json({ msg: 'Please enter your email.' });

      if (!subject)
        return res.status(400).json({ msg: 'Please enter a subject title.' });

      if (!message)
        return res.status(400).json({ msg: 'Please enter your message.' });

      const newContact = new Contact({
        name,
        email,
        subject,
        message,
      });

      await newContact.save();

      return res
        .status(201)
        .json({ msg: 'Message was sent successful.', data: newContact });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default contactControllers;
