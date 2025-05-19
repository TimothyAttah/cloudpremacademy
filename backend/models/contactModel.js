import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
