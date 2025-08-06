import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, User, KeyRound } from 'lucide-react';

// A placeholder for an admin avatar image
import adminAvatar from '../../assets/admin-avatar.png';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'mohit' && password === 'mohit123') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <style>{`
        .bubble {
          position: absolute;
          bottom: -100px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatUp 25s infinite linear;
        }
        .bubble:nth-child(1) { width: 80px; height: 80px; left: 10%; animation-duration: 20s; }
        .bubble:nth-child(2) { width: 30px; height: 30px; left: 20%; animation-duration: 15s; animation-delay: 2s; }
        .bubble:nth-child(3) { width: 50px; height: 50px; left: 35%; animation-duration: 30s; animation-delay: 4s; }
        .bubble:nth-child(4) { width: 100px; height: 100px; left: 50%; animation-duration: 22s; animation-delay: 0s; }
        .bubble:nth-child(5) { width: 40px; height: 40px; left: 65%; animation-duration: 28s; animation-delay: 1s; }
        .bubble:nth-child(6) { width: 60px; height: 60px; left: 80%; animation-duration: 18s; animation-delay: 3s; }
        .bubble:nth-child(7) { width: 20px; height: 20px; left: 90%; animation-duration: 12s; animation-delay: 5s; }

        @keyframes floatUp {
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-800 p-4 overflow-hidden">
        {/* Bubble container */}
        <div className="absolute inset-0">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <motion.div 
          className="relative z-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-sm border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-6">
            <img 
              src={adminAvatar} 
              alt="Admin Avatar" 
              className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white/30"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e0e7ff/4338ca?text=Admin'; }}
            />
          </div>

          <h1 className="text-2xl font-bold text-center text-white mb-2">Admin Panel</h1>
          <p className="text-center text-indigo-200 mb-8">Please login to continue</p>

          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-200" />
                <input
                  type="text"
                  placeholder="Enter your username here..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:bg-white/30"
                />
              </div>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-200" />
                <input
                  type="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:bg-white/30"
                />
              </div>
            </div>

            {error && <p className="text-red-300 text-sm text-center mt-4 animate-pulse">{error}</p>}
            
            <motion.button 
              type="submit" 
              className="w-full mt-8 bg-blue-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogIn size={18} />
              Login
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default AdminLogin;