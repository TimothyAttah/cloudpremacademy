import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    course: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
