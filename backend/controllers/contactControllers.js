import Contact from '../models/contactModel.js';

 const contactControllers = {
  contactMessage: async (req, res) => {
    try {
      const { firstName, lastName, phoneNumber, email, message } = req.body;

      if (!firstName)
        return res.status(400).json({ msg: 'Please enter your first name.' });

      if (!lastName)
        return res.status(400).json({ msg: 'Please enter your last name.' });

      if (!email)
        return res.status(400).json({ msg: 'Please enter your email.' });

      if (!phoneNumber)
        return res.status(400).json({ msg: 'Please enter your phone number.' });

      if (!message)
        return res.status(400).json({ msg: 'Please choose a country.' });

      const newContact = new Contact({
        firstName,
        lastName,
        email,
        phoneNumber,
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
