import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import logo from '/favico.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activeLinkStyle = {
    color: '#4f46e5',
    fontWeight: '700',
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
    { to: '/products', text: 'Products' },
  ];

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo} height={44} width={44} alt="Raghav Electrical Logo" />
            <span className="text-2xl font-bold text-gray-800">Raghav Electrical</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10 font-semibold text-gray-700 text-lg">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li>
              <a 
                href="/#about" 
                onClick={handleScrollTo('about')} 
                className="hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                onClick={handleScrollTo('contact')} 
                className="hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
          
          <NavLink 
            to="/admin" 
            className="hidden md:block bg-indigo-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-md"
          >
            Admin Login
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-2 -mr-2">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
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
              <ul className="flex flex-col items-center space-y-10">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <NavLink 
                      to={link.to} 
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                      style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a 
                    href="/#about" 
                    onClick={handleScrollTo('about')} 
                    className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="/#contact" 
                    onClick={handleScrollTo('contact')} 
                    className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <NavLink 
                to="/admin" 
                onClick={() => setIsOpen(false)}
                className="mt-14 bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors duration-200 shadow-md"
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
