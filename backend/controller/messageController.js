import Message from '../model/Message.js';

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
    try {
      const deletedMessage = await Message.findByIdAndDelete(req.params.id);
      if (!deletedMessage) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
