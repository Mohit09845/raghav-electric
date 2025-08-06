import express from 'express';
import { getMessages, createMessage, deleteMessage } from '../controller/messageController.js';

const router = express.Router();

router.get('/', getMessages);
router.post('/', createMessage);
router.delete('/:id', deleteMessage);

export default router;