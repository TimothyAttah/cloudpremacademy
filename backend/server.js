import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import contactRouter from './routes/contactRoutes.js';

const app = express();
/****** CONNECTING TO MONGODB *******/
connectDB();

/****** MIDDLEWARES *******/
app.use(express.json());
app.use(cors());

/****** ROUTES *******/
app.get('/', (req, res) => {
  res.json({ msg: 'Hello world' });
});

app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server started and running on port: ${PORT}`),
);
