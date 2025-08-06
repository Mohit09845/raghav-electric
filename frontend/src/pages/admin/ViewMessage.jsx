import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, Trash2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL;

const ViewMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch messages from the API
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/message`);
      setMessages(response.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
      setError('Could not load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Function to handle deleting a message
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`${API_URL}/message/${id}`);
        // Refetch messages to update the list
        fetchMessages(); 
      } catch (err) {
        console.error("Failed to delete message:", err);
        alert('Could not delete the message. Please try again.');
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Contact Form Messages</h2>
      
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500 text-lg py-12">{error}</p>
      ) : (
        <div className="space-y-6">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg._id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <p className="font-semibold text-lg text-gray-900">{msg.name}</p>
                  <span className="text-xs text-gray-500 mt-1 sm:mt-0">{new Date(msg.date).toLocaleString()}</span>
                </div>
                <a href={`mailto:${msg.email}`} className="text-sm text-blue-600 hover:underline break-all">{msg.email}</a>
                <p className="mt-4 text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                <div className="flex justify-end mt-4">
                  <button 
                    onClick={() => handleDelete(msg._id)}
                    className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-semibold"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No messages yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewMessage;
