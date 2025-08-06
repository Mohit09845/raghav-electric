import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import ManageProducts from './ManageProducts';
import ViewMessages from './ViewMessage';
import { LogOut, Box, MessageSquare, Menu, X, Home } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, onLogout, closeSidebar }) => (
  <div className="w-64 bg-gray-800 text-white flex flex-col h-full">
    <div className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
      <span>Admin Panel</span>
      <button onClick={closeSidebar} className="md:hidden p-1">
        <X size={24} />
      </button>
    </div>
    <nav className="flex-grow">
      <button
        onClick={() => { setActiveView('products'); closeSidebar(); }}
        className={`w-full text-left p-4 flex items-center gap-3 ${activeView === 'products' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
      >
        <Box size={20} /> Manage Products
      </button>
      <button
        onClick={() => { setActiveView('messages'); closeSidebar(); }}
        className={`w-full text-left p-4 flex items-center gap-3 ${activeView === 'messages' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
      >
        <MessageSquare size={20} /> View Messages
      </button>
    </nav>
    <div className="p-4 border-t border-gray-700">
      <button
        onClick={onLogout}
        className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-700 rounded-lg"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  </div>
);

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isAdminLoggedIn') === 'true');
  const [activeView, setActiveView] = useState('products');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    sessionStorage.setItem('isAdminLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="relative flex h-screen bg-gray-100">
      {/* Static Sidebar for Desktop */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar activeView={activeView} setActiveView={setActiveView} onLogout={handleLogout} closeSidebar={() => { }} />
      </div>

      {/* Mobile Sidebar with Animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 left-0 h-full z-40 md:hidden"
            >
              <Sidebar activeView={activeView} setActiveView={setActiveView} onLogout={handleLogout} closeSidebar={() => setIsSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header for Main Content */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between flex-shrink-0 z-10">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden mr-4">
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              {activeView === 'products' ? 'Manage Products' : 'View Messages'}
            </h1>
          </div>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 font-semibold transition-colors">
            <Home size={18} />
          </Link>
        </header>

        <main className="flex-1 overflow-y-auto">
          {activeView === 'products' && <ManageProducts />}
          {activeView === 'messages' && <ViewMessages />}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
