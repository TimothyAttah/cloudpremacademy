import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
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
    us_eastern_time: {
      type: String,
    },
    us_central_time: {
      type: String,
    },
    uk_time: {
      type: String,
    },
    sa_time: {
      type: String,
    },
  },
  { timestamps: true },
);

const Student = mongoose.model('Student', StudentSchema);

export default Student;
