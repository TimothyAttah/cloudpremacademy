import express from 'express';
import contactControllers from '../controllers/contactControllers.js';

const contactRouter = express.Router();

contactRouter.post('/message', contactControllers.contactMessage);

export default contactRouter;
