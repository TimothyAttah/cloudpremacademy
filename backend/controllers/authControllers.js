import Student from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authControllers = {
  signUp: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        course,
        us_central_time,
        us_eastern_time,
        uk_time,
        sa_time,
      } = req.body;

      if (!firstName)
        return res.status(400).json({ msg: 'Please enter your first name.' });

      if (!lastName)
        return res.status(400).json({ msg: 'Please enter your last name.' });

      if (!email)
        return res.status(400).json({ msg: 'Please enter your email.' });

      if (!phoneNumber)
        return res.status(400).json({ msg: 'Please enter your phone number.' });

      if (!country)
        return res.status(400).json({ msg: 'Please choose a country.' });

      if (!course)
        return res.status(400).json({ msg: 'Please choose a course.' });

      if (!us_central_time && !us_eastern_time && !uk_time && !sa_time)
        return res.status(400).json({ msg: 'Please choose a timezone.' });

      const student = await Student.findOne({ email });
      if (student)
        return res.status(400).json({ msg: 'This email already exists.' });

      const newStudent = new Student({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        course,
        us_central_time,
        us_eastern_time,
        uk_time,
        sa_time,
      });

      await newStudent.save();

      return res
        .status(201)
        .json({ msg: 'Sign up was successful.', data: newStudent });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, phoneNumber } = req.body;
      if (!email)
        return res.status(400).json({ msg: 'Please enter your email' });

      if (!phoneNumber)
        return res.status(400).json({ msg: 'Please enter your phone number.' });

      const student = await Student.findOne({ email });
      if (!student)
        return res.status(400).json({ msg: 'This email does not exists.' });


      // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);



      return res
        .status(200)
        .json({ msg: 'Sign in was successful.', student });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authControllers;
