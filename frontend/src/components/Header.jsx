import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import logo from '/favico.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#4f46e5',
    fontWeight: '600',
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/services', text: 'Services' },
    { to: '/products', text: 'Products' },
    { to: '/contact', text: 'Contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Updated Logo Section */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} height={40} width={40} alt="Raghav Electrical Logo" />
            <span className="text-xl font-bold text-gray-800">Raghav Electrical</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <NavLink to="/admin" className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-500 transition-colors">
            Admin Login
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-2 -mr-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center space-y-8">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <NavLink 
                      to={link.to} 
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
                      style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <NavLink 
                to="/admin" 
                onClick={() => setIsOpen(false)}
                className="mt-12 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 transition-colors"
              >
                Admin Login
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
